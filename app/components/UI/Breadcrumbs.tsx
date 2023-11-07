"use client";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

const BreadcrumbsDeatil = () => {
  return (
    <Breadcrumbs className="lg:text-3xl font-semibold">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Proizvodi</BreadcrumbItem>
      <BreadcrumbItem>Battle Royale</BreadcrumbItem>
      <BreadcrumbItem>Detalji</BreadcrumbItem>
      <BreadcrumbItem>Kupnja</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default BreadcrumbsDeatil;
