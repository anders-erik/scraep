import { useState, createContext, useContext } from 'react';
import type { ReactNode } from 'react';

import type { ScriptType } from '../../../types/script';
import { default_script } from '../../../types/script';

export type CurrentScriptContextType = {
    script: ScriptType;
    setter: React.Dispatch<React.SetStateAction<ScriptType>>;
};

export const current_script_context = createContext<CurrentScriptContextType>({script: default_script, setter: () => {}});

export function CurrentScriptProvider({ children }: { children: ReactNode })
{
  const [script, set_script] = useState<ScriptType>(default_script);

  return <current_script_context.Provider value={{script: script, setter: set_script} as CurrentScriptContextType}>{children}</current_script_context.Provider>;
  // return <CountContext.Provider value={{ count: count, count2: count2 }}>{children}</CountContext.Provider>;
}

export function useCurrentScript()
{
  const ctx = useContext(current_script_context);
  if (!ctx) throw new Error('useCurrentItem must be used within a CountProvider');
  return ctx;
}

export function useCurrentScriptData()
{
  const ctx = useContext(current_script_context);
  if (!ctx) throw new Error('useCurrentItemData must be used within a CountProvider');
  return ctx;
}