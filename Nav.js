import React from "react";
import { Link,useNavigate } from "react-router-dom";
const Nav = () => {

  const auth=localStorage.getItem("user")

  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <div>
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAgQMBEQACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIDBgcFBP/EADkQAAEDAgQEAwUFCAMAAAAAAAEAAgMEEQUSITEGQVFhEyIyFBZxkbEjQmKBoQcVM0NScsHRCCWz/8QAGgEBAQEAAwEAAAAAAAAAAAAAAAECAwQFBv/EAC4RAQACAgECBAIKAwAAAAAAAAABAgMRBBIxEyFBUQUyIiNCYYGRscHR4RTw8f/aAAwDAQACEQMRAD8A44vXcxKhoEgaAQMtIAJ5qhJoCaAmhdhHq71cgoINyblXQFAIG1xbsgSAQCCmtu0k6Dl3QSroCoaaFNDQ25sT0UCcSTcq6CVAgEAbndTQECQO1ioEgFAIGwgO8wuEASXalWAlQ1QKgQCqmmkNzS0C/NAlNBIGNUFfw/7vopoR8VAkAsgQJA1oNUWG2bd35BIErUKLK6AgthaGhwILunRVImJS431JRSQCgLKaCUQKAAvsoEdNFkCACsBrQphAOougCS43K1AFpTaC4gAEkmwA5oOg8LcKNoom1uJxh1UdWQuFxEO/4vounkzxadV7Pd4HBiv1mWPP0j2/s+NKSnkwqWd7WtliIyPtrqQLfmuXDLs/FMOO3Hm8x5x2/hqWERsyOksC/Na/RfSfCsVJpN/Xf5PD49Y1t9dZhzauPNEA2Ybfi+KvN4tcn0q93YyceMkbr3eDLE6J5Y8WcN2ncLwpjXk86YmJ1KFEIqSAC5ssyijZlwBqsjGVJCUDCBrUAWg1qFUASQACSdgFR0rg3hWPDmMr8UZetdrFERpCOp/F9F5fI5M3npp2e1wuDausl48/0/tsWI1ENJTvnqHiOJgu5x5LOKJmdQ9SclcdZtadRDlfEOOS4vUWF2UrD9mzme57r1MePph87zOZbk29qx2j+Xm0tQ+nkzN1HNvVd3j8i+C26utS80ncNooJ45YmyROzX37L2fFrmr1VevgvF43DNiuAPxCn8eNoZUAXaTpnHQ/4K8Lk5cXXMRPm5+R8OnPTqr836tMkjfFI6ORpa9ps5p3BXA+fmJrM1nvCFJQlmUBUCWZAoLaA3zO/IIJ3K3AFpTVH14XUMpMRpamVudkM7JHN6hrgT9FL1m1ZiPVqsxW0TPpMOvuxShmpW1MdXE6FwuHBw+VuvZeTi4ee1opFJ/L931ePPjmnVFvJpfFctTjTGmnc4RRatg/r7nuvoY+Gxx8cTvdvX+nmc2l88br6en++rTD0suF4pckG+8E8NTRtGI4gHMY4fZQEero5w+gXUy821N0xT37vX+G8a0T4lu3t+7YKv7IOc8hrWgkuOgA6rhxvootERuezl+N1EdXitRNAPI5wDdN7AC/6LvVjUPj+blrl5F707T/GnxPblNro6yVmQisoALkBZkZPB/E35rIxlxcblUC3Aa1CmFqALQ+ygrDSyai8Z9Q/yF2+LyrYJ19mXNhyzjn7m2UT2yMa+Nwc07EL0MtotG6z5Pcw2i0bh8fEeER+yvr4RlkbbxW9Rtf4ryMnlZwfEOHXonPTv6vu/Z5w1DXh2K1wzxRSZYYjs5wscx7C68vncmaT4dfV0uFx4yz127Q3+re2NjnyODWNF3OJsAF0Me5e9WYiNy5ZxZxI7E5XUtG4tomnU7GU9T27L2cOHpjc93ic3nTm+hT5f1a7cNALd+vRczzmM6qBFYkJZQipIFkCsBjVaGRtmanfkFqBK1CmtAVgehhWKPw958ueN27b/qFy48s08vR2ePybYZ949n24txB7bSGlgidGx9vEc46kA3ss2nqnbs8r4h42Pw6xqJ7vt4P4vPD8UtLUQPnpZH5xkIzMdYDS+40C6HK4kZpi0eUuvxuVODcTG4lHFXF0uNt9npo309HuWuPmkPe3Lstcfixi8585a5PMtmjpiNQ1hdp0woEpIACTYblZmQPAabA3WEQsyBQCsBg2Om60GSSblagMLShaN6ZJIpIiGyxvYSLgPFjbrqpFonsnVAdFIxrHvje1r/S4tIDvh1Vi0T5G4elw3gVXxDi9NhtHlY+oc5rZZLiMENLrEgdAs5MsY67lLW02So4BhosJxyfEMdo48QwuQxikbr4pytdpex1zWFhy+XB/lTNqxFfKWeuZaa+nla114ZMzRmd5T5R1K7HVHu3uGJkckl/DY5+UXOUXsOqszEdzcB8b2Zc7HNzajMLXUiYnsbiUKSplwAs2/dZlELIRWZCUFEFpsQgOa1AFqFUATstDoX7E24T75AYr4XjeCfYxNt4lx1+9a9vzXW5nV4f0XHd0HFP3ocSwf3+Zw+MO/eL/AArE+Lex8LfTLe1+1rrp16dT4e96/wCsPU4pDzgXEw4sbh4wYR/9aY7Z/Tpv97Na1uazj+avRvfqPvwvx2s4d92Bh/u54LvaD9/0eTL3vvz3usW19Lr+YeHiAb7vcfnS/wC8Xf8AhAt1+aiPfq8Ylh44wzBGxQGlq6CWWVxb5iWnQX6b/NYin1c29pVrfDLqakwXH6HhefCqPGYcUqPEFZo0M8Y2vzyiOwHK4K5cm5ms33rQ1n/kJlEvDobk/gzegWH8vbsufg/a/Bqvdx9d5yksyBSUABcbBZkZPDZ/WPmsjESSblUNagC0KBsbhahQDrc77ommd0ktU4unlkkLWGxe4u06areOkTvS1rC3OmlbHHJM97WszNDnEhotyHwWoxRv8NrFAySeONrIppGtIMga1xAv/tJxROp+5OiDDpiLOqJA2QFzvMddOfXkrGGPI8OPINfUPljd7RLnLTZ2c3A10GqlcMW1Hv8AcsY4nUNk4W43reG8PdSx4bh1dFNKZ71cJc4P0F737LrZuLFtW3MOOaerzOL+KMR4qxEVmKPjLmNyRxxNsyJvQD6kpixVxxqqxXTwiuSWgsoSyG5w2boFkQgaAWhRBabHdWAlQ1ram25IA3V2Lvk2OtvkmxNz1V2FdNgupsMOIaW8ioJTYFlCQCyEshIGgvRgB0JP6KidbqwBUCoYNtjqqoQF1dgSZApsCmwkQ2gk6BSZDeRoG/NQQgFkJA0AqBUMaoBwINimwK7Amw2guNhqU2KLg0Wab90EJsF02BTYeY5cvJBKAUCUAgEDQCC7hnpsT1QRdXYE2BXYL2TYLqbAmwDXkmwKbAgEDDb/AO0DeRoG7Dn1UEIBUCBoFyUDVAgECQCAQZYvQ/4KDEgfJUJBl/kD+5QYkAg//9k=" alt="logo" className="logo"/>
      { auth? <ul className="nav-ul">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        <li><Link to="/update">Update Products</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
    </ul>
    :
    
    <ul className="nav-ul nav-right">
      <li><Link to="/signup">SignUp</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
   
}
    </div>
  );
};

export default Nav;
