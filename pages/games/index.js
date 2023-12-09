import gameStyles from "../../styles/gamesPage.module.css"
import MainNavigation from "../../components/mainNavigation"
export default function Games() {
    return (

        <div className={gameStyles.container}>
            <MainNavigation />
            <div className={gameStyles.gameWrapper}>
                <div className={gameStyles.sideBar}>side bar</div>
                
                {/* MAIN CONTENT AREA */}
                <div className={gameStyles.mainContent}>
                    <h4>Games we love</h4>
                    <div className={gameStyles.game__TopPanelWraper}>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                    </div>

                    <h4>Top picks for you</h4>
                    <div className={gameStyles.game__MidPanelWraper}>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                    </div>


                    <h4>most played games</h4>
                    <div className={gameStyles.game__TopPanelWraper}>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                        <div className={gameStyles.gamePanel}></div>
                    </div>


                </div>
            </div>
        </div>


    )
}