import rightStyle from "../../styles/HPrightSideBar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HPrightSide() {
    return (
        <div className={rightStyle.rightSideBar}>
            {/* top area with user icon and name */}
            <div className={rightStyle.sponserWrapper}>
                <div className={rightStyle.sponserBlock}>
                    <img src="https://picsum.photos/100/50" />
                    <div className="sponserInfo">name</div>
                </div>
                <div className={rightStyle.sponserBlock}>
                    <img src="https://picsum.photos/100/50" />
                    <div className="sponserInfo">name</div>
                </div>
            </div>

            {/* side bar links */}
            <ul className="rightSideNavigation">
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