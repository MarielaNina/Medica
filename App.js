import 'react-native-url-polyfill/auto'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { supabase } from './lib/supabase'
import Init from './views/Init'
import Auth from './views/Auth'
const App = () => {
  const [session, setSession] = useState(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <View style={{ flex: 1 }}>
      {session && session.user ? <Init /> : <Auth />}
    </View>
  )
}

export default App
