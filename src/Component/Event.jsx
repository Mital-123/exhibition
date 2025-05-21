import React from 'react'

function Event() {
    return (
        <>
            <section className="event-info">
                <div className="container">
                    <div className="organizers">
                        <div className="org-item">
                            <div className="org-logo">
                                <img src={"https://scontent.famd21-1.fna.fbcdn.net/v/t39.30808-6/468518376_122149498478321773_7939441204472915354_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZfK-pB532pIQ7kNvwEYXEB8&_nc_oc=AdnHODiotk74fTxnZZcFVza0YxEYAIcJv7v-Dm5pJfRh87Q-oU9bkz5hDinRX46Zr8SpGPtFYDmoimFALXisBsR2&_nc_zt=23&_nc_ht=scontent.famd21-1.fna&_nc_gid=oKhW9u4XX1JVLnbM3VX0kw&oh=00_AfK2KrJDNdULJm8R9VWAaZNuP2pB5Nozl6YfhV8v7t6_wA&oe=683391F1"} alt="Pralesh Mahila Utkarsh Charitable Trust" />
                            </div>
                            <h3>Organized By:</h3>
                            <p>Pralesh Mahila Utkarsh Charitable Trust</p>
                        </div>
                        <div className="org-item">
                            <div className="org-logo">
                                <img src={"https://img1.wsimg.com/isteam/ip/9778bc52-420e-4a50-9974-bf414070e62c/PG%20CLICK%20LOGO.png/:/rs=w:400,h:400,cg:true,m/cr=w:400,h:400/qt=q:95"} alt="PG Click Business Platform" />
                            </div>
                            <h3>Supported By:</h3>
                            <p>PG Click Business Platform</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Event