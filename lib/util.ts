export const getCurrentYear = () => new Date().getFullYear();

export const getExperienceYears = (startYear = 2021) => {
  const years = getCurrentYear() - startYear;
  return years > 0 ? years : 0;
};

export const getExperienceLabel = (startYear = 2021) => `${getExperienceYears(startYear)} Yrs`;
