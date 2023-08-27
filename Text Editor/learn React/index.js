import Header from "./Header"

function MainContent(){
    return(
        <nav>
            <h1>Starting React</h1>
            <ol>
                <li>Want to start backend as early as possibe</li>
                <li>React has interesting applications</li>
            </ol>
        </nav>
    )
}

function Page(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

function Footer(){
    return(
        <footer>
            2023 React development. All Rights Reserved.
        </footer>
    )
}

ReactDOM.render(
    <Page/>,
    document.getElementById("root")
)

// document.getElementById("root").append(JSON.stringify(page));