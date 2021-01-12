const style = `

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.banner-bar {
    background-color: rgb(72, 78, 78);
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
}
h1 {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 40px;
    color:#fff;
}
p {
    font-family: 'Montserrat', sans-serif;
    position: relative;
    left: 12px;
    color: #666666;
}
h2 {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
    font-size: 17px;
    left: 12px;
    color:#666666;
}
.member-card {
    width: 260px;
    height: 50vh;
    margin-bottom: 5vh;
    background-color: rgb (247, 243, 240);
    box-shadow: 2px 5px 5px black;
    border-top-left-radius: 10px;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-top {
    background-color: rgb(144, 188, 187);
    color: ##666666;
    border: 2px solid rgb(144, 188, 187);
    width: 255px;
    border-top-left-radius: 10px;
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`;

module.exports = style;