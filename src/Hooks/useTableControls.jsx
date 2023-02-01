import { useState } from "react";
export default function useTableControls({
  defaultStatus = "",
  defaultPerPage = 10,
  defaultSearchString = "",
  defaultFrom = "",
  defaultTo = "",
  defaultPriceFrom = "",
  defaultPriceTo = "",
  defaultDurationFilter = "",
  defaultRole = "",
  defaultPlanFilter = "",
} = {}) {
  const [perPage, setPerPage] = useState(defaultPerPage);
  const [role, setRole] = useState(defaultRole);
  const [status, setStatus] = useState(defaultStatus);
  const [search_string, setSearchString] = useState(defaultSearchString);
  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);
  const [priceFrom, setPriceFrom] = useState(defaultPriceTo);
  const [priceTo, setPriceTo] = useState(defaultPriceFrom);
  const [durationFilter, setDurationFilter] = useState(defaultDurationFilter);
  const [planFilter, setPlanFilter] = useState(defaultPlanFilter);
  return {
    perPage,
    setPerPage,
    status,
    setStatus,
    search_string,
    setSearchString,
    from,
    setFrom,
    to,
    setTo,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    durationFilter,
    setDurationFilter,
    planFilter,
    setPlanFilter,
    role,
    setRole,
  };
}
