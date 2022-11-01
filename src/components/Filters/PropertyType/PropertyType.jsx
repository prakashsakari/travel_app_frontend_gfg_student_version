import { v4 as uuid } from "uuid";
import { useFilter } from "../../../context";

const propertyTypes = [
  { id: uuid(), type: "House" },
  { id: uuid(), type: "Guest House" },
  { id: uuid(), type: "Flat" },
  { id: uuid(), type: "Hotel" },
];

export const PropertyType = () => {
  const { propertyType, filterDispatch } = useFilter();

  console.log({ propertyType });

  const handlePropertyClick = (property) => {
    filterDispatch({
      type: "PROPERTY_TYPE",
      payload: property,
    });
  };

  return (
    <div className="filter-container">
      <span className="filter-label">Property Type</span>
      <div className="d-flex gap-larger">
        {propertyTypes.map(({ id, type }) => (
          <span
            className={`span-label property-type cursor-pointer align-center justify-center on-hover ${
              propertyType === type ? "selected" : ""
            }`}
            key={id}
            onClick={() => handlePropertyClick(type)}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
