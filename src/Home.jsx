function Home() {
    const challengeList = [
        
        {
            title: "Four Card (grid)",
            url: "/four-card-feature-section"
        },
        {
            title: "FAQ Accordion",
            url: "/faq-accordion"
        },
        {
            title: "Recipe Page",
            url: "/recipe-page"
        },
        {
            title: "Qrcode Component",
            url: "/qrcode-component"
        }
    ]
    return <div>
        <h1>Jeevakirtan</h1>
        <p>Application Developer - Thoughtworks</p>
        <h2>Completed Challenges</h2>
        <ul>
        {
            challengeList.map(challenge =><li><a href={challenge.url } > { challenge.title}</a></li> )
        }
        </ul>
    </div>
}

export default Home;