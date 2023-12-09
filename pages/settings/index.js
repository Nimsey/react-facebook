import gameStyles from "../../styles/gamesPage.module.css"
import MainNavigation from "../../components/mainNavigation"
import NewsFeed from "../../components/HomePage/NewsFeed";
import HPLeftSideBar from "../../components/HomePage/HPleftSideBar"
import HPleftSide from "../../components/HomePage/HPleftSideBar";
export default function Settings() {
    return (

        <div className={gameStyles.container}>
            <MainNavigation />
            <div className={gameStyles.gameWrapper}>
                <div className={gameStyles.sideBar}>side bar
                    <HPleftSide />
                    </div>

                {/* MAIN CONTENT AREA */}
                <div className={gameStyles.mainContent}>
                <NewsFeed />
                </div>

            </div>
        </div>
    


    )
}