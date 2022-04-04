export const getCategoryImage = (category: string): string => {
  switch (category) {
    case 'Icons':
      return 'https://www.kindpng.com/picc/m/391-3914860_illustrated-icon-hd-png-download.png'
    case 'Web App':
      return 'https://appinventiv.com/wp-content/uploads/sites/1/2017/10/Ways-in-Which-Web-Application-Development-is-Changing.png'
    case 'Illustrations':
      return 'https://design4users.com/wp-content/uploads/2021/03/digital-art-andrey-prokopenko-illustration.png.pagespeed.ce.U3_BJ-DAzE.png'
    case 'Mobile App':
      return 'https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/737351/mobile-ux-design-best-practices-9874a6518f6e4130f6b5edc1c72c60bc.png'
    case 'Stock Photos':
      return 'https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg'
    default:
      return 'https://media.istockphoto.com/vectors/error-404-page-not-found-vector-id673101428?k=20&m=673101428&s=170667a&w=0&h=sifFCXQls5ygak3Y-II0cI1tibgQZVyPWzpLHtHKOGg='
  }
}

export const minToHour = (minute: number) => {
  const hour = minute / 60
  return hour === 1 ? `${hour} hr` : `${hour} hrs`
}

export const hourFormat = (hour: number) => {
  return hour === 1 ? `${hour} hr` : `${hour} hrs`
}
