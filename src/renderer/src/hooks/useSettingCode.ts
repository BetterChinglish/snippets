import { useContext } from 'react'
import { CodeContext, ContextProps } from '@renderer/context/CodeContext'

const useSettingCode = (): ContextProps => {
  const context = useContext(CodeContext)
  if (context === undefined) {
    throw new Error('useSettingCode must be used within a CodeContext.Provider')
  }
  return context
}

export default useSettingCode
