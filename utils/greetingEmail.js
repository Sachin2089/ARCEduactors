
exports.greetingEmail = () => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Welcome to Arc Educators</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
                background-color: #f0f0f0; /* Background color */
                padding: 10px; /* Padding around the logo */
                border-radius: 5px; /* Rounded corners */
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <div class="body">
                <p>Hey,</p>
                <p>Thank you for subscribing to Arc Educators! You will receive weekly updates related to events and astronomical phenomena.</p>
                <p>Stay tuned for exciting content and educational resources!</p>
            </div>
            <div class="support">If you have any questions or need further assistance, please feel free to reach out to us
                at
                <a href="mailto:arceducators@gmail.com">arceducators@gmail.com</a>. We are here to help!
            </div>
        </div>
    </body>
    
    </html>`;
};
