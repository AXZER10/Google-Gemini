/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/context';

const SideBar = () => {

    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompts } = useContext(context);

    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} />
                <div className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <div className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0,18)} ...</p>
                                </div>
                            )
                        })}

                    </div>
                    : null}

            </div>
            <div className='bottom'>
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default SideBar