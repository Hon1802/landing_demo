import React, { useEffect, useState } from 'react'
// import UserInput from './components/inputUser'
import HeaderContext from './components/headerTop'
import { SalesChannel, UserInputType } from './common/interface'
import UserInput from './components/inputUser'
import AgentInput from './components/channel/Agent'
import EComInput from './components/channel/ECommerce'
import ShopInput from './components/channel/Shop'
import WebInput from './components/channel/WebFacebookZalo'

const Home: React.FC = () => {
  const [userData, setUserData] = useState<UserInputType | null>(null);
  const [isSliding, setIsSliding] = useState<boolean>(false); // State for sliding effect
  const [channel, setChannel] = useState<string>('default');
  
  const handleUserInput = (data: UserInputType) => {
    console.log('Dữ liệu từ UserInput:', data.type)
    setChannel(data.type)
    setUserData(data)
  }
  const [renderComponent, setInputComponent] = useState<JSX.Element>(<UserInput onInputSubmit={handleUserInput} />);
  useEffect(() => {
    // Start sliding effect
    setIsSliding(true)

    // Determine the input component based on the channel
    let newComponent: JSX.Element
    switch (channel) {
      case SalesChannel.Agent:
        newComponent = <AgentInput onInputSubmit={handleUserInput} />
        break
      case SalesChannel.ECommerce:
        newComponent = <EComInput onInputSubmit={handleUserInput} />
        break
      case SalesChannel.Shop:
        newComponent = <ShopInput onInputSubmit={handleUserInput} />
        break
      case SalesChannel.WebFacebookZalo:
        newComponent = <WebInput onInputSubmit={handleUserInput} />
        break
      case 'default':
      default:
        newComponent = <UserInput onInputSubmit={handleUserInput} />
    }

    // After a brief delay to allow the sliding effect to complete, change the component
    const timeoutId = setTimeout(() => {
      setInputComponent(newComponent)
      setIsSliding(false)
    }, 500) // Duration should match the CSS transition duration

    // Cleanup timeout on unmount
    return () => clearTimeout(timeoutId)
  }, [userData, channel])
  return (
    <main className='images'>
      <section className='image-grid container'>
        <picture className='image_cont img_top'>
          <source
            srcSet='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg'
            media='(min-width: 1500px)'
          />
          <source
            srcSet='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg'
            media='(min-width: 700px)'
          />
          <img
            data-speed='auto'
            className=''
            src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg'
            alt=''
          />
          <HeaderContext />
        </picture>
      </section>
      <div className={`input-container ${isSliding ? 'slide-out' : ''}`}>{renderComponent}</div>
      {isSliding && <div className={`input-container slide-in`}>{renderComponent}</div>}
    </main>
  )
}

export default Home
