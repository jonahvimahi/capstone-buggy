import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getBugs } from '../Controller/Redux/BugSlice'
import { useHistory } from 'react-router'
import { ThemeProvider } from "@emotion/react";
import DashCard from '../BugDash/DashCard'
import Sidebar from '../Sidebar/Sidebar'

export default function Home() {
    const browserHistory = useHistory()
    const dispatch = useDispatch()
    const bugs = useSelector(state => state.bugs)
    let highCount = 0
    let midCount = 0
    let lowCount = 0

    if(bugs !== undefined){
        highCount = filterBugs(1)
        midCount = filterBugs(2)
        lowCount = filterBugs(3)
    }

    function filterBugs(priority){
        return bugs.filter((bug) => {return bug.priority === priority})
    }
    function redirect(){
        browserHistory.push('/viewbugs')
    }

    useEffect(()=>{
        dispatch(getBugs())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bugs === undefined])
    return(
        <>
        <ThemeProvider>
        <Sidebar />
        <DashCard priority='1' count={highCount.length} clicked={redirect}/>
        <DashCard priority='2' count={midCount.length} clicked={redirect}/>
        <DashCard priority='3' count={lowCount.length} clicked={redirect}/>
        </ThemeProvider>
        </>
    )
}