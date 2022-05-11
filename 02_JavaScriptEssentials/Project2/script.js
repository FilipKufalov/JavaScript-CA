function InchesToCentimeters(inches)
{
    return inches * 2.54;
}

function CentimetersToInches(cm)
{
    return cm / 2.54;
}

function KilogramToPound(kg)
{
    return kg * 2.205;
}

function PoundToKilogram(lbs)
{
    return lbs / 2.205;
}

console.log(`1 inch is equal to ${InchesToCentimeters(1)} cm`)
console.log(`2.54 cm is equal to ${CentimetersToInches(2.54)} inch`)
console.log(`2.205 pounds is equal to ${PoundToKilogram(2.205)} kilo`)
console.log(`1 kilo is equal to ${KilogramToPound(1)} pounds`)