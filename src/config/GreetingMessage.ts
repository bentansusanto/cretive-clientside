export const greetingMessage = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  const greetings = (hour: number): string => {
    switch (true) {
      case hour >= 5 && hour < 12:
        return "Selamat pagi";
      case hour >= 12 && hour < 14:
        return "Selamat siang";
      case hour >= 14 && hour < 18:
        return "Selamat sore";
      default:
        return "Selamat malam";
    }
  };
  // console.log(greetings(currentHour))
  return greetings(currentHour)
  
};
