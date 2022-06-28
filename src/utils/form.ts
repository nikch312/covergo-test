import { SelectItem, Location, Currency, Package } from "@/types";

const additionalPercentage = {
  [Package.STANDARD]: 0,
  [Package.SAFE]: 50,
  [Package.SUPER_SAFE]: 75,
};

const rateAndCurrency = {
  [Location.HONG_KONG]: {
    rate: 1,
    currency: Currency.HONG_KONG
  },
  [Location.UNITED_STATES]: {
    rate: 2,
    currency: Currency.UNITED_STATES
  },
  [Location.AUSTRALIA]: {
    rate: 3,
    currency: Currency.AUSTRALIA
  },
};

const plans = (age: number, location: Location): Array<SelectItem> => {
  const currency = rateAndCurrency[location].currency;
  const basePrice = age * 10 * rateAndCurrency[location].rate;

  return [{
    value: Package.STANDARD,
    label: Package.STANDARD,
  }, {
    value: Package.SAFE,
    label: `${Package.SAFE} (+${basePrice * additionalPercentage[Package.SAFE] / 100}${currency}, ${additionalPercentage[Package.SAFE]}%)`,
  }, {
    value: Package.SUPER_SAFE,
    label: `${Package.SUPER_SAFE} (+${basePrice * additionalPercentage[Package.SUPER_SAFE] / 100}${currency}, ${additionalPercentage[Package.SUPER_SAFE]}%)`,
  }];
}

const locations = (): Array<SelectItem> => {
  return [{
    value: Location.HONG_KONG,
    label: Location.HONG_KONG,
  }, {
    value: Location.UNITED_STATES,
    label: Location.UNITED_STATES,
  }, {
    value: Location.AUSTRALIA,
    label: Location.AUSTRALIA,
  }]
}

const premiumPrice = (age: number, location: Location, plan: Package): string => {
  const price = age * 10 * rateAndCurrency[location].rate * (1 + additionalPercentage[plan] / 100);
  return price.toFixed(2);
}

const selectedCurrency = (location: Location): string => {
  return rateAndCurrency[location].currency;
}

export const FormUtil = {
  plans,
  locations,
  premiumPrice,
  selectedCurrency,
};
