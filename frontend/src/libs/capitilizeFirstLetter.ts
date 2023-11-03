function capitalizeFirstLetter(str: string): string {
    if (!str) return str; // Return the original string if it's empty or null
    
    const lowercase = str.toLowerCase();
    return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
  }

  export default capitalizeFirstLetter;