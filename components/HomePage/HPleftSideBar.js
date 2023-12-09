export default function HPleftSide() {
    return (
        <div className="leftSidebar">
            {/* top area with user icon and name */}
            <div className="userHeader">
                <div className="image">image</div>
                <div className="LSBProfileName">name</div>
            </div>
            {/* side bar links */}
            <ul className="leftSideNavigation">
                <li>friends</li>
                <li>memories</li>
                <li>saved</li>
                <li>groups</li>
                <li>video</li>
                <li>market</li>
                <li>feeds</li>
                <li>events</li>
                <li>ads manager</li>
                <li>meta</li>
                <li>See more...</li>
            </ul>
        </div>
    )
}