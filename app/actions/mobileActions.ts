"use server"

import { headers } from 'next/headers';

export const isMobileDevice = async () => {
    if (typeof process === 'undefined') {
        throw new Error('[Server method] you are importing a server-only module outside of server');
    }

    const headersList = await headers()
    const ua = headersList.get('user-agent')
    if (ua === null) {
        return false
    }
    if (ua.match(/Android/i)
        || ua.match(/webOS/i)
        || ua.match(/iPhone/i)
        || ua.match(/iPad/i)
        || ua.match(/iPod/i)
        || ua.match(/BlackBerry/i)
        || ua.match(/Windows Phone/i)) {
        return true
    }
    return false
};

export const getMobileAgentInfoAction = async () => {
    const headersList = await headers()
    const ua = headersList.get('user-agent')
    if (ua === null) {
        return 0
    }

    if (ua.match(/iPhone/i) || ua.match(/iPad/i)
        || ua.match(/iPod/i)) {
        return 1
    }

    if(ua.match(/Android/i)){
        return 2
    }

    return 3
}   