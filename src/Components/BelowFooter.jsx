import React from 'react'

const BelowFooter = () => {
  return (
    <div style={{display:"flex", gap:"30rem", justifyContent:"center"}}>
        <div>
            <img src="https://1000logos.net/wp-content/uploads/2020/09/THG-Logo.png" alt="thg-logo" width="100px" />
            <p>2022 © The Hut.com Ltd</p>
        </div>

        <div>
            <p><b>Pay Securly With</b></p>
            <div style={{display:"grid", gridTemplateColumns:"repeat(10,1fr)", gap:"0.7rem"}}>
                <img src="https://cdn-icons-png.flaticon.com/128/196/196578.png" alt="visa" width="45px"/>
                <img src="https://cdn-icons-png.flaticon.com/512/8816/8816574.png" alt="visa" width="45px"/>
                <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="visa" width="45px"/>
                <img src="https://cdn-icons-png.flaticon.com/128/196/196548.png" alt="visa" width="45px"/>
                <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" alt="visa" width="45px"/>
                <img src="https://cdn-icons-png.flaticon.com/128/217/217445.png" alt="visa" width="45px"/>
                <img src="https://cdn-icons-png.flaticon.com/128/888/888870.png" alt="visa" width="45px"/>
                <img src="https://cdn-icons-png.flaticon.com/128/825/825454.png" alt="visa" width="45px"/>
                <img src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="visa" width="45px"/>
                <img src="https://t4.ftcdn.net/jpg/04/86/04/93/240_F_486049399_n8o3OGuvwOQOCDwLgGFBhngbAcOnrFhc.jpg" alt="visa" width="50px"/>
                <img src="https://cdn-icons-png.flaticon.com/128/349/349272.png" alt="visa" width="45px"/>
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968341.png" alt="visa" width="45px"/>
            </div>
        </div>
    </div>
  )
}

export default BelowFooter