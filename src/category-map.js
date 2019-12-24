import React, { Component } from "react";
import ArticleData from "./category/articleData";
import CategoryList from "./category-nav";
import List from "./categoryData";

function CategoryMap() {
  const CategoryComponents = List.map(List => (
    <CategoryList id={List.id} name={List.name} />
  ));

  return <div>{CategoryComponents}</div>;
}

export default CategoryMap;
