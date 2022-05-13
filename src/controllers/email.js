const transporter = require('../config/nodemailer')

const sendEmail = async (req, res) => {
    const { name, projectName, email, telephone, description } = req.body

    if(!name || !projectName || !email || !telephone || !description)
        return res.status(401).json({ success: false, message: "Preencha todos os campos!"})

    try {
        const response = await transporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: process.env.NODEMAILER_USER,
            replyTo: email,
            subject: `[CenoLAB Formulário Website] - ${name}`,
            html: `<span><strong>Nome:</strong> ${name}</span><br>
                <span><strong>Nome do projeto:</strong> ${projectName}</span><br>
                <span><strong>Email:</strong> ${email}</span><br>
                <span><strong>Telefone para contato:</strong> ${telephone}</span><br>
                <span><strong>Conte mais sobre seu projeto ou ideia:</strong> ${description}</span>`
        })

        res.status(200).json({ success: true, message: "Email enviado com sucesso! Entraremos em contato.", data: response })
    } catch (error) {
        res.status(400).json({ success: false, message: "Não foi possível enviar o email, tente mais tarde!", data: error })
    }
}

module.exports = sendEmail
