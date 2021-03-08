let nodemailer = require('nodemailer');
const events = require('events');
const { on } = require('process');
const emitter = new events.EventEmitter();

let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'pero.pandiloski@hotmail.com',
        pass: '123456nodemail'
    }
});

const sendMail = (data) => {
    let message = {
        from: `${data.from}`,
        to: `${data.to}`,
        subject: `${data.subject}`,
        text: `${data.message}`
    };
    transporter.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

emitter
    .on('product_created', data => {
        sendMail(data)

    })

    .on('product_deleted', data => {
        sendMail(data)
    })


emitter.emit('product_created', {
    from: 'pero.pandiloski@hotmail.com',
    to: 'pero.pandiloski@gmail.com',
    subject: "New Product!",
    message: "This is content for the product_created event"
})

emitter.emit('product_deleted', {
    from: 'pero.pandiloski@hotmail.com',
    to: 'pero.pandiloski@gmail.com',
    subject: 'Oh no! Product deleted!',
    message: `Don't over React.js`
})




