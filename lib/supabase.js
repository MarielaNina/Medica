import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'https://tdxmbxzpearrjerholqw.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkeG1ieHpwZWFycmplcmhvbHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3NjUyMDksImV4cCI6MjAwNjM0MTIwOX0.F-W0T_r6tpkLqacW6cgws8iibxPVkHpIRH_Z3gSzvz4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})
