export function useScrollAnimation() {
    const { $motion } = useNuxtApp()
    
    onMounted(() => {
      const elements = document.querySelectorAll('[data-animate]')
      
      elements.forEach((el) => {
        $motion(el, {
          initial: { opacity: 0, y: 20 },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 15,
              mass: 0.5
            }
          }
        })
      })
    })
  }