const IP_RATE_LIMIT = new Map()
const WINDOW_MS = 60 * 1000 // 1 minuto
const MAX_REQUESTS = 5

export function isRateLimited(ip) {
    const now = Date.now()
    const entry = IP_RATE_LIMIT.get(ip) || { count: 0, timestamp: now }

    // Reset count si pasó la ventana
    if (now - entry.timestamp > WINDOW_MS) {
        IP_RATE_LIMIT.set(ip, { count: 1, timestamp: now })
        return false
    }

    // Si supera el límite
    if (entry.count >= MAX_REQUESTS) {
        return true
    }

    // Aumenta el contador
    entry.count += 1
    IP_RATE_LIMIT.set(ip, entry)
    return false
}
