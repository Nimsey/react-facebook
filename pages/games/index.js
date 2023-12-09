import gameStyles from "../../styles/gamesPage.module.css"
import MainNavigation from "../../components/mainNavigation"
export default function Games() {
    return (

        <div className={gameStyles.container}>
            <MainNavigation />
            <div className={gameStyles.gameWrapper}>
                <div className={gameStyles.sideBar}>
                    <div className={gameStyles.sidebar__title}>
                        <h4>Gaming</h4>
                        <span>⚙️ </span>
                    </div>
                    <form className={gameStyles.form}>
                        <input type="search" placeholder="Search..." />
                        <button type="submit">Search</button>
                    </form>
<div className="playGames"></div>
                </div>

                {/* MAIN CONTENT AREA */}
                <div className={gameStyles.mainContent}>
                    <h4>Games we love</h4>
                    <div className={gameStyles.game__TopPanelWraper}>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}>

                                <h5>Game title</h5>
                                <span>1M player</span>
                            </div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}>
                                <h5>Game title</h5>
                                <span>1M player</span>
                            </div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}>
                                <h5>Game title</h5>
                                <span>1M player</span>
                            </div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}>
                                <h5>Game title</h5>
                                <span>1M player</span>
                            </div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}>
                                <h5>Game title</h5>
                                <span>1M player</span>
                            </div>
                        </div>
                    </div>

                    <h4>Top picks for you</h4>
                    <div className={gameStyles.game__MidPanelWraper}>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                    </div>


                    <h4>most played games</h4>
                    <div className={gameStyles.game__TopPanelWraper}>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                    </div>


                </div>
            </div>

            <style jsx global>{`
input[type="search"] {
    border: none;
    background: transparent;
    margin: 0;
    padding: 7px 8px;
    font-size: 14px;
    color: inherit;
    border: 1px solid transparent;
    border-radius: inherit;
}

input[type="search"]::placeholder {
    color: #bbb;
}
button[type="submit"] {
    text-indent: -999px;
    overflow: hidden;
    width: 40px;
    padding: 0;
    margin: 0;
    border: 1px solid transparent;
    border-radius: inherit;
    background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
    cursor: pointer;
    opacity: 0.7;
  }
  
  button[type="submit"]:hover {
    opacity: 1;
  }
      `}</style>
        </div>


    )
}