import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
  title: 'ZEUS',
  description: 'Discover and Share AI Prompt',
}

function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body >
        <Provider>
          <div className='main'>
            <div className='gradient'/>
          </div>
          <main className='app'>
            <Nav/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
  }  
export default RootLayout;
