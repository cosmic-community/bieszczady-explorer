(function () {
  if (window.self === window.top) return

  const logs = []
  const MAX_LOGS = 500

  const originalConsole = {
    log: console.log,
    warn: console.warn,
    error: console.error,
    info: console.info,
    debug: console.debug
  }

  function captureLog(level, args) {
    const timestamp = new Date().toISOString()
    const message = args
      .map((arg) => {
        if (typeof arg === 'object' && arg !== null) {
          try {
            return JSON.stringify(
              arg,
              (key, value) => {
                if (typeof value === 'function') return '[Function]'
                if (value instanceof Error) return value.toString()
                return value
              },
              2
            )
          } catch (e) {
            return '[Object]'
          }
        }
        return String(arg)
      })
      .join(' ')

    const logEntry = {
      timestamp,
      level,
      message,
      url: window.location.href
    }

    logs.push(logEntry)
    if (logs.length > MAX_LOGS) {
      logs.shift()
    }

    try {
      window.parent.postMessage(
        {
          type: 'console-log',
          log: logEntry
        },
        '*'
      )
    } catch (e) {}
  }

  console.log = (...args) => {
    originalConsole.log(...args)
    captureLog('log', args)
  }
  console.warn = (...args) => {
    originalConsole.warn(...args)
    captureLog('warn', args)
  }
  console.error = (...args) => {
    originalConsole.error(...args)
    captureLog('error', args)
  }
  console.info = (...args) => {
    originalConsole.info(...args)
    captureLog('info', args)
  }
  console.debug = (...args) => {
    originalConsole.debug(...args)
    captureLog('debug', args)
  }

  window.addEventListener('error', (event) => {
    captureLog('error', [event.message])
  })

  window.addEventListener('unhandledrejection', (event) => {
    captureLog('error', [event.reason])
  })

  function sendReady() {
    try {
      window.parent.postMessage(
        {
          type: 'console-capture-ready',
          url: window.location.href,
          timestamp: new Date().toISOString()
        },
        '*'
      )
    } catch (e) {}
  }

  function sendRouteChange() {
    try {
      window.parent.postMessage(
        {
          type: 'route-change',
          route: {
            pathname: window.location.pathname,
            search: window.location.search,
            hash: window.location.hash,
            href: window.location.href
          },
          timestamp: new Date().toISOString()
        },
        '*'
      )
    } catch (e) {}
  }

  const originalPushState = history.pushState
  history.pushState = function () {
    originalPushState.apply(this, arguments)
    sendRouteChange()
  }

  const originalReplaceState = history.replaceState
  history.replaceState = function () {
    originalReplaceState.apply(this, arguments)
    sendRouteChange()
  }

  window.addEventListener('popstate', sendRouteChange)
  window.addEventListener('hashchange', sendRouteChange)

  if (document.readyState === 'complete') {
    sendReady()
    sendRouteChange()
  } else {
    window.addEventListener('load', () => {
      sendReady()
      sendRouteChange()
    })
  }
})()