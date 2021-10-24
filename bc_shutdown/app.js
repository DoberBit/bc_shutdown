'use strict';

const ProxyAgent = require('socks-proxy-agent')
const IO = require('socket.io-client')

const Agent = new ProxyAgent('socks5://127.0.0.1:9050')

let SocketArr = []

/*const SocketClient = IO('https://bondage-club-server.herokuapp.com/', {
    agent: Agent,
})

SocketClient.on('connect', () => {
    console.log('connected via proxy!')
})

SocketClient.on('disconnect', (data) => {
    console.log(data)
})

SocketClient.on('ServerInfo', (data, socket) => {
    console.log(data)
    console.log(socket)
})

SocketClient.on('LoginResponse', (data) => {
    console.log(data)
})

SocketClient.on('CreationResponse', (data) => {

})*/

function SocketEventsListeners(clientStruct) {
    clientStruct.Socket.on('connect', () => {
        clientStruct.Connected = true
        console.log('Client #' + num + ' is connected )')
    })

    clientStruct.Socket.on('disconnect', () => {
        clientStruct.Connected = !true
        console.log('Client #' + num + ' is disconnected ;(')
    })

    clientStruct.Socket.on('CreationResponse', (data) => {
        if (typeof data === "object" && data.ServerAnswer != null) {
            console.log('Bot "' + clientStruct.Bot.Login + ':' + clientStruct.Bot.Password + '" is created )))')
        } else {
            console.log('Bot "' + clientStruct.Bot.Login + '" can\'t create (recreate other bot) :@')
            clientStruct.Bot = {}
            CreateBot(clientStruct)
        }
    })
    clientStruct.Socket.on('LoginResponse', (data) => {
        console.log(data)
    })
}

function CreateConnections(count) {
    for (var c = 0; c < count; i++) {
        var num = SocketArr.push({
            Socket: IO('https://bondage-club-server.herokuapp.com/', {
                agent: Agent,
            }),
            Connected: false,
            Bot: {}
        })
        SocketEventsListeners(SocketArr[num])
    }
}

function GeneratorRandomString(length) {
    let result = ''
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let cl = chars.length
    for (var i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * cl))
    }
    return result
}

function CreateBot(clientStruct) {
    clientStruct.Bot = { Login: GeneratorRandomString(19), Password: GeneratorRandomString(19) }
    clientStruct.Socket.emit('AccountCreate', { Name: "Check description", AccountName: clientStruct.Bot.Login, Password: clientStruct.Bot.Password, Email: "" })
}

CreateConnections(63)
//SocketClient.emit('AccountLogin', { AccountName: 'herokuIsShit', Password: 'BenWakeUp'}) // heroku not for multiplayer projects this platform only for testing code (use OVH or Hetzner or Amazon)
