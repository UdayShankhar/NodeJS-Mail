let nodemailer = require("nodemailer")
let sender = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"Enter your gmail acc.MailID",
        pass:"Enter your gmail acc.password"
    }
})
let composemail = {
    from:"Enter your gmail acc.MailID",
    to:"Reciever's Mail ID",
    subject:"Node-JS Sample",
    text:"This is a NodeJS Sample mail"
}
sender.sendMail(composemail,(sent,error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Mail Sent Successfully");
    }
})