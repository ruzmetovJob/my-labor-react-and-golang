import React, { useMemo, useState } from 'react'

export default function useToggleOnFocus <T extends object>(initialState:boolean = false) {
    const [show, toggle] = useState(initialState);
    
    const eventHandlers = useMemo(() => ({
      onFocus: () => toggle(true),
      onHover: () => toggle(true),
      onBlur: () => toggle(false),
    }), []);
  
    return [show, eventHandlers];
  }
