import {mount} from 'marketing/MarketingApp'
import React, {useRef, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const MarketingApp = () => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(()=>{
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname}) => {
        const { pathname } = history.location

        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      }
    })

    // whenever container change path, call onParentNavigate
    history.listen(onParentNavigate)
  }, [])

  return (
    <div ref={ref} />
  )
}

export default MarketingApp

