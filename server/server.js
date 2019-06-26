const express = require('express');
const app = express();

app.get('/api', (req, res) => {

    const feedBacks = [
        { id: 1, title: "It sounds corry but they really do care", message: "This is a text message from Christopher Burkill via fake server", action: "Christopher Burkill - Sold his 5 bed house" },
        { id: 2, title: "I really appreciate that", message: "I was trying to sell out my house since 2 years and i finally did it. Thank you!", action: "France Burkill - Sold his 3 bed house" },
        { id: 3, title: "That was so quick", message: "Their services are high quality and they really appreciate their clients", action: "Alexandra Burkill - Sold his 13 bed villa" }
    ];

    res.json(feedBacks);
});

const port = 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));