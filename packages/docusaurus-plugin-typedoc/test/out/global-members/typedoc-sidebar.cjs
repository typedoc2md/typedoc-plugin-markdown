// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = { items: [
  {
    "type": "category",
    "label": "CategoryA",
    "items": [
      {
        "type": "doc",
        "id": "out/global-members/classes/ClassA",
        "label": "ClassA"
      }
    ]
  },
  {
    "type": "category",
    "label": "CategoryB",
    "items": [
      {
        "type": "doc",
        "id": "out/global-members/classes/ClassB",
        "label": "ClassB"
      },
      {
        "type": "doc",
        "id": "out/global-members/interfaces/InterfaceA",
        "label": "InterfaceA"
      },
      {
        "type": "doc",
        "id": "out/global-members/interfaces/InterfaceB",
        "label": "InterfaceB"
      }
    ]
  }
]};
module.exports = typedocSidebar.items;