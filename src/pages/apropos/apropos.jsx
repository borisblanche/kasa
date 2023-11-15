import React from "react"
import { Link } from "react-router-dom"
import NavHeader from "../../components/header"
import Banner from "../../components/banner"
import Footer from "../../components/footer"
import styled from "styled-components"

const Dropcard = styled.select`
color:blue;
width:80%;`

const DropBoard = styled.div`
display:flex;
flex-direction:column;`

function Apropos(){
    return (
        <div>
            <NavHeader />
            <Banner />
            <DropBoard>
                <Dropcard>
                <option hidden >
                Menu
              </option>
                    <option>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet odit obcaecati unde impedit nisi ipsam repellendus sequi distinctio repudiandae sunt aut accusantium cumque dolore, laboriosam, eligendi eos! Cum, officia. Libero nulla optio ipsum voluptatum porro magni numquam atque architecto voluptas repellat? Nulla enim eveniet vel cumque fuga eligendi modi at.</option>
                </Dropcard>
                <Dropcard>
                <option hidden >
                Menu
              </option>
                    <option>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet odit obcaecati unde impedit nisi ipsam repellendus sequi distinctio repudiandae sunt aut accusantium cumque dolore, laboriosam, eligendi eos! Cum, officia. Libero nulla optio ipsum voluptatum porro magni numquam atque architecto voluptas repellat? Nulla enim eveniet vel cumque fuga eligendi modi at.</option>
                    
                    </Dropcard> <Dropcard>
                <option hidden >
                Menu
              </option>
                    <option>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet odit obcaecati unde impedit nisi ipsam repellendus sequi distinctio repudiandae sunt aut accusantium cumque dolore, laboriosam, eligendi eos! Cum, officia. Libero nulla optio ipsum voluptatum porro magni numquam atque architecto voluptas repellat? Nulla enim eveniet vel cumque fuga eligendi modi at.</option>
                    
                    </Dropcard> <Dropcard>
                <option hidden >
                Menu
              </option>
                    <option>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet odit obcaecati unde impedit nisi ipsam repellendus sequi distinctio repudiandae sunt aut accusantium cumque dolore, laboriosam, eligendi eos! Cum, officia. Libero nulla optio ipsum voluptatum porro magni numquam atque architecto voluptas repellat? Nulla enim eveniet vel cumque fuga eligendi modi at.</option>
                    
                    </Dropcard>
                
                    </DropBoard>
            
           
          
            <Link to="/">Page d acceuil</Link>
        <Footer/>
        </div>
    )
} 

export default Apropos