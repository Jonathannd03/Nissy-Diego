export const useCountdown = (targetDate: Date) => {
  const now = ref(new Date())
  const timeLeft = ref({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  const updateNow = () => {
    now.value = new Date()
    const diff = targetDate.getTime() - now.value.getTime()

    timeLeft.value = {
      days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
        .toString()
        .padStart(2, '0'),
      hours: Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        .toString()
        .padStart(2, '0'),
      minutes: Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
        .toString()
        .padStart(2, '0'),
      seconds: Math.max(0, Math.floor((diff % (1000 * 60)) / 1000))
        .toString()
        .padStart(2, '0')
    }
  }

  let timer: NodeJS.Timeout

  onMounted(() => {
    updateNow()
    timer = setInterval(updateNow, 1000)
  })

  onBeforeUnmount(() => {
    clearInterval(timer)
  })

  return {
    ...toRefs(timeLeft)
  }
}
