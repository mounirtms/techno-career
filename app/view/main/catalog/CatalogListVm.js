
Ext.define('Techno.view.main.CatalogListVm', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.cataloglist',

    stores: {
        navItems: {
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: 'children'
                }
            },
            type: 'tree',
            rootVisible: true,
            root: {
                expanded: true,
                text: 'All',
                iconCls: 'x-fa fa-sitemap',
                "children": [
                    {
                        "id": 3,
                        "parent_id": 2,
                        "text": "Tous les produits",
                        "is_active": true,
                        "position": 1,
                        "level": 2,
                        "product_count": 8921,
                        "children": [
                            {
                                "id": 8,
                                "parent_id": 3,
                                "text": "SCOLAIRE",
                                "is_active": true,
                                "position": 2,
                                "level": 3,
                                "product_count": 6663,
                                "children": [
                                    {
                                        "id": 17,
                                        "parent_id": 8,
                                        "text": "TRACAGES",
                                        "is_active": true,
                                        "position": 2,
                                        "level": 4,
                                        "product_count": 356,
                                        "children": [
                                            {
                                                "id": 18,
                                                "parent_id": 17,
                                                "text": "COMPAS SCOLAIRE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 115,
                                                "children": []
                                            },
                                            {
                                                "id": 65,
                                                "parent_id": 17,
                                                "text": "ENSEMBLES GEOMETRIQUES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 77,
                                                "children": []
                                            },
                                            {
                                                "id": 67,
                                                "parent_id": 17,
                                                "text": "EQUERRES ECOLIER",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            },
                                            {
                                                "id": 90,
                                                "parent_id": 17,
                                                "text": "RAPPORTEURS SCOLAIRES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            },
                                            {
                                                "id": 92,
                                                "parent_id": 17,
                                                "text": "REGLES SCOLAIRES",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 88,
                                                "children": []
                                            },
                                            {
                                                "id": 342,
                                                "parent_id": 17,
                                                "text": "COMPAS TECHNIQUE",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 1803,
                                                "parent_id": 17,
                                                "text": "EQUERRES TECHNIQUES",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 1806,
                                                "parent_id": 17,
                                                "text": "GRILLE D AMENAGEMENT",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            },
                                            {
                                                "id": 1809,
                                                "parent_id": 17,
                                                "text": "RAPPORTEURS TECHNIQUES",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 1812,
                                                "parent_id": 17,
                                                "text": "REGLES TECHNIQUES",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            },
                                            {
                                                "id": 1815,
                                                "parent_id": 17,
                                                "text": "TRACES LETTRES",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 1818,
                                                "parent_id": 17,
                                                "text": "TABLE DESSIN TECHNIQUE",
                                                "is_active": true,
                                                "position": 12,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 24,
                                        "parent_id": 8,
                                        "text": "CALCULATRICES",
                                        "is_active": true,
                                        "position": 3,
                                        "level": 4,
                                        "product_count": 41,
                                        "children": [
                                            {
                                                "id": 25,
                                                "parent_id": 24,
                                                "text": "CALCULATRICES DE POCHE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 334,
                                                "parent_id": 24,
                                                "text": "CALCULATRICES SCIENTIFIQUES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 28,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 27,
                                        "parent_id": 8,
                                        "text": "SUPPORTS EN PAPIER",
                                        "is_active": true,
                                        "position": 4,
                                        "level": 4,
                                        "product_count": 620,
                                        "children": [
                                            {
                                                "id": 28,
                                                "parent_id": 27,
                                                "text": "CAHIER & REGISTRE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 192,
                                                "children": []
                                            },
                                            {
                                                "id": 35,
                                                "parent_id": 27,
                                                "text": "COPIES DOUBLES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            },
                                            {
                                                "id": 81,
                                                "parent_id": 27,
                                                "text": "PAPIER À DESSIN",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 35,
                                                "children": []
                                            },
                                            {
                                                "id": 155,
                                                "parent_id": 27,
                                                "text": "PAPIER FEUTRINE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 33,
                                                "children": []
                                            },
                                            {
                                                "id": 157,
                                                "parent_id": 27,
                                                "text": "PAPIERS DECORATION ALUMINIUM & CREPON",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 60,
                                                "children": []
                                            },
                                            {
                                                "id": 165,
                                                "parent_id": 27,
                                                "text": "PAPIER ADHESIF PAILLETTE",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 50,
                                                "children": []
                                            },
                                            {
                                                "id": 186,
                                                "parent_id": 27,
                                                "text": "PAPIER ALBUM & BLOC",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 63,
                                                "children": []
                                            },
                                            {
                                                "id": 192,
                                                "parent_id": 27,
                                                "text": "PAPIER CALQUE",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 269,
                                                "parent_id": 27,
                                                "text": "FEUILLES MOBILES",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            },
                                            {
                                                "id": 277,
                                                "parent_id": 27,
                                                "text": "PAPIERS GOMMES",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            },
                                            {
                                                "id": 287,
                                                "parent_id": 27,
                                                "text": "BLOC & CARNETS",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 82,
                                                "children": []
                                            },
                                            {
                                                "id": 387,
                                                "parent_id": 27,
                                                "text": "VELOUR",
                                                "is_active": true,
                                                "position": 12,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 392,
                                                "parent_id": 27,
                                                "text": "PAPIER FLUORESCENT",
                                                "is_active": true,
                                                "position": 13,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 402,
                                                "parent_id": 27,
                                                "text": "PAPIER MILIMETRE",
                                                "is_active": true,
                                                "position": 14,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 408,
                                                "parent_id": 27,
                                                "text": "BRISTOL",
                                                "is_active": true,
                                                "position": 15,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 415,
                                                "parent_id": 27,
                                                "text": "BUVARD",
                                                "is_active": true,
                                                "position": 16,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 418,
                                                "parent_id": 27,
                                                "text": "PAPIER BLANC",
                                                "is_active": true,
                                                "position": 17,
                                                "level": 5,
                                                "product_count": 5,
                                                "children": []
                                            },
                                            {
                                                "id": 892,
                                                "parent_id": 27,
                                                "text": "ETIQUETTES",
                                                "is_active": true,
                                                "position": 18,
                                                "level": 5,
                                                "product_count": 18,
                                                "children": []
                                            },
                                            {
                                                "id": 2159,
                                                "parent_id": 27,
                                                "text": "PAPIER COUCHE",
                                                "is_active": true,
                                                "position": 19,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 2160,
                                                "parent_id": 27,
                                                "text": "PAPIER PHOTO",
                                                "is_active": true,
                                                "position": 20,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 2233,
                                                "parent_id": 27,
                                                "text": "BLOCS",
                                                "is_active": true,
                                                "position": 21,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 31,
                                        "parent_id": 8,
                                        "text": "ARDOISES & MINI TABLEAU",
                                        "is_active": true,
                                        "position": 5,
                                        "level": 4,
                                        "product_count": 137,
                                        "children": [
                                            {
                                                "id": 32,
                                                "parent_id": 31,
                                                "text": "ARDOISES BLANCHES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 124,
                                                "children": []
                                            },
                                            {
                                                "id": 339,
                                                "parent_id": 31,
                                                "text": "ARDOISES NOIR À CRAIE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 38,
                                        "parent_id": 8,
                                        "text": "ECRITURE & CORRECTION",
                                        "is_active": true,
                                        "position": 6,
                                        "level": 4,
                                        "product_count": 1099,
                                        "children": [
                                            {
                                                "id": 39,
                                                "parent_id": 38,
                                                "text": "CRAYONS NOIR",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 111,
                                                "children": []
                                            },
                                            {
                                                "id": 77,
                                                "parent_id": 38,
                                                "text": "GOMMES ECOLIER",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 123,
                                                "children": []
                                            },
                                            {
                                                "id": 87,
                                                "parent_id": 38,
                                                "text": "PORTES MINES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 40,
                                                "children": []
                                            },
                                            {
                                                "id": 96,
                                                "parent_id": 38,
                                                "text": "STYLOS À PLUMES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 32,
                                                "children": []
                                            },
                                            {
                                                "id": 99,
                                                "parent_id": 38,
                                                "text": "SURLIGNEUR",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 293,
                                                "children": []
                                            },
                                            {
                                                "id": 106,
                                                "parent_id": 38,
                                                "text": "STYLOS ENCRE GEL",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 138,
                                                "children": []
                                            },
                                            {
                                                "id": 109,
                                                "parent_id": 38,
                                                "text": "STYLOS ENCRE LIQUIDE",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 42,
                                                "children": []
                                            },
                                            {
                                                "id": 112,
                                                "parent_id": 38,
                                                "text": "STYLOS ENCRE VISQUEUSE",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 175,
                                                "children": []
                                            },
                                            {
                                                "id": 121,
                                                "parent_id": 38,
                                                "text": "CARTOUCHES",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 26,
                                                "children": []
                                            },
                                            {
                                                "id": 189,
                                                "parent_id": 38,
                                                "text": "MARQUEURS POUR TABLEAU BLANC",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            },
                                            {
                                                "id": 199,
                                                "parent_id": 38,
                                                "text": "CORRECTEURS EN STYLOS",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 25,
                                                "children": []
                                            },
                                            {
                                                "id": 210,
                                                "parent_id": 38,
                                                "text": "MINES",
                                                "is_active": true,
                                                "position": 12,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            },
                                            {
                                                "id": 263,
                                                "parent_id": 38,
                                                "text": "GOMMES",
                                                "is_active": true,
                                                "position": 13,
                                                "level": 5,
                                                "product_count": 43,
                                                "children": []
                                            },
                                            {
                                                "id": 346,
                                                "parent_id": 38,
                                                "text": "CRAIES",
                                                "is_active": true,
                                                "position": 14,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            },
                                            {
                                                "id": 350,
                                                "parent_id": 38,
                                                "text": "EFFACEUR",
                                                "is_active": true,
                                                "position": 15,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 378,
                                                "parent_id": 38,
                                                "text": "CORRECTEUR À RUBAN",
                                                "is_active": true,
                                                "position": 16,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 51,
                                        "parent_id": 8,
                                        "text": "COLORIAGE",
                                        "is_active": true,
                                        "position": 7,
                                        "level": 4,
                                        "product_count": 662,
                                        "children": [
                                            {
                                                "id": 52,
                                                "parent_id": 51,
                                                "text": "CRAYONS COULEURS",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 138,
                                                "children": []
                                            },
                                            {
                                                "id": 58,
                                                "parent_id": 51,
                                                "text": "CRAYONS À CIRE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 22,
                                                "children": []
                                            },
                                            {
                                                "id": 62,
                                                "parent_id": 51,
                                                "text": "CRAYONS AQUARELLABLE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            },
                                            {
                                                "id": 70,
                                                "parent_id": 51,
                                                "text": "FEUTRES DE COLORIAGE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 106,
                                                "children": []
                                            },
                                            {
                                                "id": 74,
                                                "parent_id": 51,
                                                "text": "FEUTRE POINTE FINE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 136,
                                                "children": []
                                            },
                                            {
                                                "id": 125,
                                                "parent_id": 51,
                                                "text": "PEINTURES",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 156,
                                                "children": []
                                            },
                                            {
                                                "id": 204,
                                                "parent_id": 51,
                                                "text": "AQUARELLES",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 24,
                                                "children": []
                                            },
                                            {
                                                "id": 312,
                                                "parent_id": 51,
                                                "text": "CRAYON DE COULEUR PASTEL",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 22,
                                                "children": []
                                            },
                                            {
                                                "id": 316,
                                                "parent_id": 51,
                                                "text": "CRAYON DE COULEUR PRO",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 39,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 136,
                                        "parent_id": 8,
                                        "text": "COLLES, ADHESIFS & ACCESSOIRES",
                                        "is_active": true,
                                        "position": 8,
                                        "level": 4,
                                        "product_count": 94,
                                        "children": [
                                            {
                                                "id": 137,
                                                "parent_id": 136,
                                                "text": "COLLES LIQUIDES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            },
                                            {
                                                "id": 140,
                                                "parent_id": 136,
                                                "text": "COLLES STICK",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 37,
                                                "children": []
                                            },
                                            {
                                                "id": 213,
                                                "parent_id": 136,
                                                "text": "COLLE BLANCHE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 30,
                                                "children": []
                                            },
                                            {
                                                "id": 218,
                                                "parent_id": 136,
                                                "text": "RUBAN ADHESIF",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 366,
                                                "parent_id": 136,
                                                "text": "COLLE EN PATE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 2154,
                                                "parent_id": 136,
                                                "text": "DEVIDOIR RUBAN ADHESIF",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 0,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 150,
                                        "parent_id": 8,
                                        "text": "ACTIVITES CREATIVES",
                                        "is_active": true,
                                        "position": 9,
                                        "level": 4,
                                        "product_count": 344,
                                        "children": [
                                            {
                                                "id": 151,
                                                "parent_id": 150,
                                                "text": "CRISTAL ADHESIF",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 35,
                                                "children": []
                                            },
                                            {
                                                "id": 159,
                                                "parent_id": 150,
                                                "text": "PETIT MATERIEL DE CREATION",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 211,
                                                "children": []
                                            },
                                            {
                                                "id": 162,
                                                "parent_id": 150,
                                                "text": "FORMES EN MOUSSE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 54,
                                                "children": []
                                            },
                                            {
                                                "id": 381,
                                                "parent_id": 150,
                                                "text": "MOUSSE HOLOGRAPHIQUE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 384,
                                                "parent_id": 150,
                                                "text": "MOUSSE METALIQUE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 389,
                                                "parent_id": 150,
                                                "text": "PAILLETTE DECORATIVES",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            },
                                            {
                                                "id": 394,
                                                "parent_id": 150,
                                                "text": "MOUSSE SIMPLE",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 17,
                                                "children": []
                                            },
                                            {
                                                "id": 397,
                                                "parent_id": 150,
                                                "text": "MOUSSE PAILLETTE",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 178,
                                        "parent_id": 8,
                                        "text": "SUPPORTS EN TOILE",
                                        "is_active": true,
                                        "position": 10,
                                        "level": 4,
                                        "product_count": 57,
                                        "children": [
                                            {
                                                "id": 179,
                                                "parent_id": 178,
                                                "text": "CHASSIS TOILE COTON",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 42,
                                                "children": []
                                            },
                                            {
                                                "id": 182,
                                                "parent_id": 178,
                                                "text": "BLOC DE TOILE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 1855,
                                                "parent_id": 178,
                                                "text": "CARTONS TOILÉS",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 222,
                                        "parent_id": 8,
                                        "text": "BAGAGERIE & ACCESSOIRES",
                                        "is_active": true,
                                        "position": 11,
                                        "level": 4,
                                        "product_count": 1144,
                                        "children": [
                                            {
                                                "id": 223,
                                                "parent_id": 222,
                                                "text": "TROUSSES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 387,
                                                "children": []
                                            },
                                            {
                                                "id": 224,
                                                "parent_id": 222,
                                                "text": "SAC À DOS ECOLIER",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 635,
                                                "children": []
                                            },
                                            {
                                                "id": 227,
                                                "parent_id": 222,
                                                "text": "SAC À DOS LAPTOP",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 52,
                                                "children": []
                                            },
                                            {
                                                "id": 322,
                                                "parent_id": 222,
                                                "text": "SAC À DOS",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 54,
                                                "children": []
                                            },
                                            {
                                                "id": 2202,
                                                "parent_id": 222,
                                                "text": "SACOCHE À EPAULE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 11,
                                                "children": []
                                            },
                                            {
                                                "id": 2230,
                                                "parent_id": 222,
                                                "text": "ACCESSOIRES BAGAGERIE",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 232,
                                        "parent_id": 8,
                                        "text": "COULEURS ACRYLIQUES",
                                        "is_active": true,
                                        "position": 12,
                                        "level": 4,
                                        "product_count": 90,
                                        "children": [
                                            {
                                                "id": 233,
                                                "parent_id": 232,
                                                "text": "ACRYLIQUE STANDARD SERIE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 90,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 250,
                                        "parent_id": 8,
                                        "text": "DECORATION & FANTAISIE",
                                        "is_active": true,
                                        "position": 13,
                                        "level": 4,
                                        "product_count": 110,
                                        "children": [
                                            {
                                                "id": 251,
                                                "parent_id": 250,
                                                "text": "STICKERS CRYSTAL",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 56,
                                                "children": []
                                            },
                                            {
                                                "id": 411,
                                                "parent_id": 250,
                                                "text": "STICKERS",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 54,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 254,
                                        "parent_id": 8,
                                        "text": "EQUIPEMENT DE BUREAU",
                                        "is_active": true,
                                        "position": 14,
                                        "level": 4,
                                        "product_count": 46,
                                        "children": [
                                            {
                                                "id": 255,
                                                "parent_id": 254,
                                                "text": "GLOBES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 298,
                                                "parent_id": 254,
                                                "text": "TABLEAU BLANC",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 31,
                                                "children": []
                                            },
                                            {
                                                "id": 894,
                                                "parent_id": 254,
                                                "text": "MODULE DE CLASSEMENT",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 256,
                                        "parent_id": 8,
                                        "text": "PROTEGES",
                                        "is_active": true,
                                        "position": 15,
                                        "level": 4,
                                        "product_count": 306,
                                        "children": [
                                            {
                                                "id": 257,
                                                "parent_id": 256,
                                                "text": "PROTEGES CAHIERS",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 33,
                                                "children": []
                                            },
                                            {
                                                "id": 258,
                                                "parent_id": 256,
                                                "text": "PROTEGES A RABATS",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 11,
                                                "children": []
                                            },
                                            {
                                                "id": 261,
                                                "parent_id": 256,
                                                "text": "PROTEGES LIVRES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 44,
                                                "children": []
                                            },
                                            {
                                                "id": 275,
                                                "parent_id": 256,
                                                "text": "PROTEGE DOCUMENT",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 211,
                                                "children": []
                                            },
                                            {
                                                "id": 2237,
                                                "parent_id": 256,
                                                "text": "COUVERT PAGE DE GARDE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 273,
                                        "parent_id": 8,
                                        "text": "CHEMISES",
                                        "is_active": true,
                                        "position": 16,
                                        "level": 4,
                                        "product_count": 91,
                                        "children": [
                                            {
                                                "id": 274,
                                                "parent_id": 273,
                                                "text": "CHEMISE À RABAT",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 87,
                                                "children": []
                                            },
                                            {
                                                "id": 296,
                                                "parent_id": 273,
                                                "text": "CHEMISE DOSSIER",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 426,
                                                "parent_id": 273,
                                                "text": "SOUS-CHEMISE DOSSIER",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 281,
                                        "parent_id": 8,
                                        "text": "AGRAFAGES",
                                        "is_active": true,
                                        "position": 17,
                                        "level": 4,
                                        "product_count": 74,
                                        "children": [
                                            {
                                                "id": 282,
                                                "parent_id": 281,
                                                "text": "AGRAFEUSES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 60,
                                                "children": []
                                            },
                                            {
                                                "id": 420,
                                                "parent_id": 281,
                                                "text": "AGRAFES & OTE AGRAFES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 2243,
                                                "parent_id": 281,
                                                "text": "ADHESIF DOUBLE FACE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 291,
                                        "parent_id": 8,
                                        "text": "POCHETTE",
                                        "is_active": true,
                                        "position": 18,
                                        "level": 4,
                                        "product_count": 133,
                                        "children": [
                                            {
                                                "id": 292,
                                                "parent_id": 291,
                                                "text": "POCHETTE ENVELOPPE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 79,
                                                "children": []
                                            },
                                            {
                                                "id": 294,
                                                "parent_id": 291,
                                                "text": "POCHETTE ZIP",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 48,
                                                "children": []
                                            },
                                            {
                                                "id": 424,
                                                "parent_id": 291,
                                                "text": "POCHETTE PERFOREE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 2216,
                                                "parent_id": 291,
                                                "text": "POCHETTE DE PLASTIFICATION",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 5,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 328,
                                        "parent_id": 8,
                                        "text": "CLASSEMENT & ARCHIVAGE",
                                        "is_active": true,
                                        "position": 19,
                                        "level": 4,
                                        "product_count": 250,
                                        "children": [
                                            {
                                                "id": 329,
                                                "parent_id": 328,
                                                "text": "BOITE DE CLASSEMENT",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 57,
                                                "children": []
                                            },
                                            {
                                                "id": 331,
                                                "parent_id": 328,
                                                "text": "CLASSEURS",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 126,
                                                "children": []
                                            },
                                            {
                                                "id": 919,
                                                "parent_id": 328,
                                                "text": "BOITE D ARCHIVES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 2148,
                                                "parent_id": 328,
                                                "text": "CORBEILLE A COURRIERS",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 20,
                                                "children": []
                                            },
                                            {
                                                "id": 2149,
                                                "parent_id": 328,
                                                "text": "PORTE-REVUES",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 20,
                                                "children": []
                                            },
                                            {
                                                "id": 2164,
                                                "parent_id": 328,
                                                "text": "INTERCALAIRES",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 2221,
                                                "parent_id": 328,
                                                "text": "RELIURES & ACCESSOIRES",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 11,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 360,
                                        "parent_id": 8,
                                        "text": "GOUACHE",
                                        "is_active": true,
                                        "position": 20,
                                        "level": 4,
                                        "product_count": 8,
                                        "children": [
                                            {
                                                "id": 361,
                                                "parent_id": 360,
                                                "text": "GOUACHE STUDIO",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 8,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 435,
                                        "parent_id": 8,
                                        "text": "INSTRUMENTS DE COUPE ET DE PERFORATION",
                                        "is_active": true,
                                        "position": 21,
                                        "level": 4,
                                        "product_count": 39,
                                        "children": [
                                            {
                                                "id": 436,
                                                "parent_id": 435,
                                                "text": "CISEAUX",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 26,
                                                "children": []
                                            },
                                            {
                                                "id": 1845,
                                                "parent_id": 435,
                                                "text": "PERFORATEURS",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 870,
                                        "parent_id": 8,
                                        "text": "DESSIN ET ART GRAPHIQUE",
                                        "is_active": true,
                                        "position": 24,
                                        "level": 4,
                                        "product_count": 31,
                                        "children": [
                                            {
                                                "id": 871,
                                                "parent_id": 870,
                                                "text": "FEUTRE MARQUEUR ET STYLO",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 31,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1549,
                                        "parent_id": 8,
                                        "text": "FOURNITURES ET ACCESSOIRES",
                                        "is_active": true,
                                        "position": 25,
                                        "level": 4,
                                        "product_count": 846,
                                        "children": [
                                            {
                                                "id": 1550,
                                                "parent_id": 1549,
                                                "text": "PALETTE DE PEINTURE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            },
                                            {
                                                "id": 1555,
                                                "parent_id": 1549,
                                                "text": "CISEAUX ECOLIER",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 180,
                                                "children": []
                                            },
                                            {
                                                "id": 1557,
                                                "parent_id": 1549,
                                                "text": "TAILLE CRAYONS ECOLIER",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 249,
                                                "children": []
                                            },
                                            {
                                                "id": 1561,
                                                "parent_id": 1549,
                                                "text": "EPONGES & BROSSES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 47,
                                                "children": []
                                            },
                                            {
                                                "id": 1694,
                                                "parent_id": 1549,
                                                "text": "BUCHETTES & JETONS",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 28,
                                                "children": []
                                            },
                                            {
                                                "id": 1695,
                                                "parent_id": 1549,
                                                "text": "PINCEAUX ECOLIER",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            },
                                            {
                                                "id": 1698,
                                                "parent_id": 1549,
                                                "text": "ETIQUETTES ECOLIER",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            },
                                            {
                                                "id": 1734,
                                                "parent_id": 1549,
                                                "text": "POT A CRAYON",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            },
                                            {
                                                "id": 1737,
                                                "parent_id": 1549,
                                                "text": "ACCESSOIR ECOLIER",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 1740,
                                                "parent_id": 1549,
                                                "text": "ACCESSOIRES DE FIXATION",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 33,
                                                "children": []
                                            },
                                            {
                                                "id": 1839,
                                                "parent_id": 1549,
                                                "text": "GOURDES & PORTES MANGER",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 48,
                                                "children": []
                                            },
                                            {
                                                "id": 1914,
                                                "parent_id": 1549,
                                                "text": "PATES À MODELER",
                                                "is_active": true,
                                                "position": 12,
                                                "level": 5,
                                                "product_count": 132,
                                                "children": []
                                            },
                                            {
                                                "id": 1951,
                                                "parent_id": 1549,
                                                "text": "OUVRES LETTRES",
                                                "is_active": true,
                                                "position": 13,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 1952,
                                                "parent_id": 1549,
                                                "text": "LOUPES",
                                                "is_active": true,
                                                "position": 14,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 1962,
                                                "parent_id": 1549,
                                                "text": "PEINTURES",
                                                "is_active": true,
                                                "position": 15,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 2124,
                                                "parent_id": 1549,
                                                "text": "TABLIER",
                                                "is_active": true,
                                                "position": 16,
                                                "level": 5,
                                                "product_count": 50,
                                                "children": []
                                            },
                                            {
                                                "id": 2218,
                                                "parent_id": 1549,
                                                "text": "NETTOYANT TABLEAU BLANC",
                                                "is_active": true,
                                                "position": 17,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1849,
                                        "parent_id": 8,
                                        "text": "MOULAGE COLLAGE & MODELAGE",
                                        "is_active": true,
                                        "position": 26,
                                        "level": 4,
                                        "product_count": 19,
                                        "children": [
                                            {
                                                "id": 1850,
                                                "parent_id": 1849,
                                                "text": "ARGILES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1862,
                                        "parent_id": 8,
                                        "text": "BOITE DE CLASSEMENT",
                                        "is_active": true,
                                        "position": 27,
                                        "level": 4,
                                        "product_count": 6,
                                        "children": [
                                            {
                                                "id": 1863,
                                                "parent_id": 1862,
                                                "text": "CHEMISE À RABAT",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2169,
                                        "parent_id": 8,
                                        "text": "COLLES",
                                        "is_active": true,
                                        "position": 28,
                                        "level": 4,
                                        "product_count": 133,
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": 11,
                                "parent_id": 3,
                                "text": "LOISIRS CREATIFS",
                                "is_active": true,
                                "position": 3,
                                "level": 3,
                                "product_count": 4495,
                                "children": [
                                    {
                                        "id": 19,
                                        "parent_id": 11,
                                        "text": "TRACAGES",
                                        "is_active": true,
                                        "position": 2,
                                        "level": 4,
                                        "product_count": 354,
                                        "children": [
                                            {
                                                "id": 20,
                                                "parent_id": 19,
                                                "text": "COMPAS SCOLAIRE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 115,
                                                "children": []
                                            },
                                            {
                                                "id": 66,
                                                "parent_id": 19,
                                                "text": "ENSEMBLES GEOMETRIQUES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 77,
                                                "children": []
                                            },
                                            {
                                                "id": 68,
                                                "parent_id": 19,
                                                "text": "EQUERRES ECOLIER",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            },
                                            {
                                                "id": 91,
                                                "parent_id": 19,
                                                "text": "RAPPORTEURS SCOLAIRES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            },
                                            {
                                                "id": 93,
                                                "parent_id": 19,
                                                "text": "REGLES SCOLAIRES",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 88,
                                                "children": []
                                            },
                                            {
                                                "id": 1802,
                                                "parent_id": 19,
                                                "text": "EQUERRES TECHNIQUES",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 1805,
                                                "parent_id": 19,
                                                "text": "GRILLE D AMENAGEMENT",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            },
                                            {
                                                "id": 1808,
                                                "parent_id": 19,
                                                "text": "RAPPORTEURS TECHNIQUES",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 1811,
                                                "parent_id": 19,
                                                "text": "REGLES TECHNIQUES",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            },
                                            {
                                                "id": 1814,
                                                "parent_id": 19,
                                                "text": "TRACES LETTRES",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 1817,
                                                "parent_id": 19,
                                                "text": "TABLE DESSIN TECHNIQUE",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 45,
                                        "parent_id": 11,
                                        "text": "ECRITURE & CORRECTION",
                                        "is_active": true,
                                        "position": 3,
                                        "level": 4,
                                        "product_count": 419,
                                        "children": [
                                            {
                                                "id": 46,
                                                "parent_id": 45,
                                                "text": "CRAYONS NOIR",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 110,
                                                "children": []
                                            },
                                            {
                                                "id": 80,
                                                "parent_id": 45,
                                                "text": "GOMMES ECOLIER",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 123,
                                                "children": []
                                            },
                                            {
                                                "id": 88,
                                                "parent_id": 45,
                                                "text": "PORTES MINES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 40,
                                                "children": []
                                            },
                                            {
                                                "id": 118,
                                                "parent_id": 45,
                                                "text": "MARQUEURS PERMANENTS",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 97,
                                                "children": []
                                            },
                                            {
                                                "id": 211,
                                                "parent_id": 45,
                                                "text": "MINES",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            },
                                            {
                                                "id": 266,
                                                "parent_id": 45,
                                                "text": "GOMMES",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 43,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 53,
                                        "parent_id": 11,
                                        "text": "COLORIAGE",
                                        "is_active": true,
                                        "position": 4,
                                        "level": 4,
                                        "product_count": 661,
                                        "children": [
                                            {
                                                "id": 54,
                                                "parent_id": 53,
                                                "text": "CRAYONS COULEURS",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 138,
                                                "children": []
                                            },
                                            {
                                                "id": 59,
                                                "parent_id": 53,
                                                "text": "CRAYONS À CIRE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 22,
                                                "children": []
                                            },
                                            {
                                                "id": 63,
                                                "parent_id": 53,
                                                "text": "CRAYONS AQUARELLABLE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            },
                                            {
                                                "id": 71,
                                                "parent_id": 53,
                                                "text": "FEUTRES DE COLORIAGE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 106,
                                                "children": []
                                            },
                                            {
                                                "id": 75,
                                                "parent_id": 53,
                                                "text": "FEUTRE POINTE FINE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 135,
                                                "children": []
                                            },
                                            {
                                                "id": 126,
                                                "parent_id": 53,
                                                "text": "PEINTURES",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 156,
                                                "children": []
                                            },
                                            {
                                                "id": 205,
                                                "parent_id": 53,
                                                "text": "AQUARELLES",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 24,
                                                "children": []
                                            },
                                            {
                                                "id": 313,
                                                "parent_id": 53,
                                                "text": "CRAYON DE COULEUR PASTEL",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 22,
                                                "children": []
                                            },
                                            {
                                                "id": 315,
                                                "parent_id": 53,
                                                "text": "CRAYON DE COULEUR PRO",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 39,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 82,
                                        "parent_id": 11,
                                        "text": "SUPPORTS EN PAPIER",
                                        "is_active": true,
                                        "position": 5,
                                        "level": 4,
                                        "product_count": 307,
                                        "children": [
                                            {
                                                "id": 83,
                                                "parent_id": 82,
                                                "text": "PAPIER À DESSIN",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 35,
                                                "children": []
                                            },
                                            {
                                                "id": 154,
                                                "parent_id": 82,
                                                "text": "PAPIER FEUTRINE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 33,
                                                "children": []
                                            },
                                            {
                                                "id": 156,
                                                "parent_id": 82,
                                                "text": "PAPIERS DECORATION ALUMINIUM & CREPON",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 60,
                                                "children": []
                                            },
                                            {
                                                "id": 164,
                                                "parent_id": 82,
                                                "text": "PAPIER ADHESIF PAILLETTE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 50,
                                                "children": []
                                            },
                                            {
                                                "id": 185,
                                                "parent_id": 82,
                                                "text": "PAPIER ALBUM & BLOC",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 63,
                                                "children": []
                                            },
                                            {
                                                "id": 195,
                                                "parent_id": 82,
                                                "text": "PAPIER CALQUE",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 278,
                                                "parent_id": 82,
                                                "text": "PAPIERS GOMMES",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            },
                                            {
                                                "id": 386,
                                                "parent_id": 82,
                                                "text": "VELOUR",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 391,
                                                "parent_id": 82,
                                                "text": "PAPIER FLUORESCENT",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 399,
                                                "parent_id": 82,
                                                "text": "CARTONS PLUME & ONDULEE",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 18,
                                                "children": []
                                            },
                                            {
                                                "id": 409,
                                                "parent_id": 82,
                                                "text": "BRISTOL",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 2115,
                                                "parent_id": 82,
                                                "text": "CARTONS PLUME & ONDULES",
                                                "is_active": true,
                                                "position": 12,
                                                "level": 5,
                                                "product_count": 11,
                                                "children": []
                                            },
                                            {
                                                "id": 2161,
                                                "parent_id": 82,
                                                "text": "PAPIER COUCHE",
                                                "is_active": true,
                                                "position": 13,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 2162,
                                                "parent_id": 82,
                                                "text": "PAPIER PHOTO",
                                                "is_active": true,
                                                "position": 14,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 132,
                                        "parent_id": 11,
                                        "text": "COLLES, ADHESIFS & ACCESSOIRES",
                                        "is_active": true,
                                        "position": 6,
                                        "level": 4,
                                        "product_count": 110,
                                        "children": [
                                            {
                                                "id": 133,
                                                "parent_id": 132,
                                                "text": "COLLES LIQUIDES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 20,
                                                "children": []
                                            },
                                            {
                                                "id": 142,
                                                "parent_id": 132,
                                                "text": "COLLES STICK",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 37,
                                                "children": []
                                            },
                                            {
                                                "id": 215,
                                                "parent_id": 132,
                                                "text": "COLLE BLANCHE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 30,
                                                "children": []
                                            },
                                            {
                                                "id": 221,
                                                "parent_id": 132,
                                                "text": "RUBAN ADHESIF",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 367,
                                                "parent_id": 132,
                                                "text": "COLLE EN PATE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 371,
                                                "parent_id": 132,
                                                "text": "COLLES GEL",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 375,
                                                "parent_id": 132,
                                                "text": "COLLES EN SPRAY",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 1953,
                                                "parent_id": 132,
                                                "text": "PISTOLETS DE COLLES ET RECHARGES",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            },
                                            {
                                                "id": 1958,
                                                "parent_id": 132,
                                                "text": "COLLES DE MONTAGE",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 5,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 146,
                                        "parent_id": 11,
                                        "text": "MATERIELS BEAUX ARTS",
                                        "is_active": true,
                                        "position": 7,
                                        "level": 4,
                                        "product_count": 99,
                                        "children": [
                                            {
                                                "id": 147,
                                                "parent_id": 146,
                                                "text": "MATERIELS BEAUX ART",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 44,
                                                "children": []
                                            },
                                            {
                                                "id": 1838,
                                                "parent_id": 146,
                                                "text": "PINCEAUX",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 29,
                                                "children": []
                                            },
                                            {
                                                "id": 1977,
                                                "parent_id": 146,
                                                "text": "SACS & PORTE DOCUMENTS",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 5,
                                                "children": []
                                            },
                                            {
                                                "id": 1978,
                                                "parent_id": 146,
                                                "text": "CHEVALETS",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 2119,
                                                "parent_id": 146,
                                                "text": "SPATULES",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 148,
                                        "parent_id": 11,
                                        "text": "ACTIVITES CREATIVES",
                                        "is_active": true,
                                        "position": 8,
                                        "level": 4,
                                        "product_count": 344,
                                        "children": [
                                            {
                                                "id": 149,
                                                "parent_id": 148,
                                                "text": "CRISTAL ADHESIF",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 35,
                                                "children": []
                                            },
                                            {
                                                "id": 158,
                                                "parent_id": 148,
                                                "text": "PETIT MATERIEL DE CREATION",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 211,
                                                "children": []
                                            },
                                            {
                                                "id": 161,
                                                "parent_id": 148,
                                                "text": "FORMES EN MOUSSE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 54,
                                                "children": []
                                            },
                                            {
                                                "id": 380,
                                                "parent_id": 148,
                                                "text": "MOUSSE HOLOGRAPHIQUE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 383,
                                                "parent_id": 148,
                                                "text": "MOUSSE METALIQUE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 388,
                                                "parent_id": 148,
                                                "text": "PAILLETTE DECORATIVES",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            },
                                            {
                                                "id": 393,
                                                "parent_id": 148,
                                                "text": "MOUSSE SIMPLE",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 17,
                                                "children": []
                                            },
                                            {
                                                "id": 396,
                                                "parent_id": 148,
                                                "text": "MOUSSE PAILLETTE",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 170,
                                        "parent_id": 11,
                                        "text": "COULEURS ACRYLIQUES",
                                        "is_active": true,
                                        "position": 9,
                                        "level": 4,
                                        "product_count": 293,
                                        "children": [
                                            {
                                                "id": 171,
                                                "parent_id": 170,
                                                "text": "ACRYLIQUE STUDIO",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 118,
                                                "children": []
                                            },
                                            {
                                                "id": 229,
                                                "parent_id": 170,
                                                "text": "AUXILIAIRE POUR ACRYLIQUE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 49,
                                                "children": []
                                            },
                                            {
                                                "id": 231,
                                                "parent_id": 170,
                                                "text": "ACRYLIQUE STANDARD SERIE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 90,
                                                "children": []
                                            },
                                            {
                                                "id": 240,
                                                "parent_id": 170,
                                                "text": "ART CREATION ACRYLIQUES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 37,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 176,
                                        "parent_id": 11,
                                        "text": "SUPPORTS EN TOILE",
                                        "is_active": true,
                                        "position": 10,
                                        "level": 4,
                                        "product_count": 58,
                                        "children": [
                                            {
                                                "id": 177,
                                                "parent_id": 176,
                                                "text": "CHASSIS TOILE COTON",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 43,
                                                "children": []
                                            },
                                            {
                                                "id": 181,
                                                "parent_id": 176,
                                                "text": "BLOC DE TOILE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 1856,
                                                "parent_id": 176,
                                                "text": "CARTONS TOILÉS",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 248,
                                        "parent_id": 11,
                                        "text": "DECORATION & FANTAISIE",
                                        "is_active": true,
                                        "position": 12,
                                        "level": 4,
                                        "product_count": 110,
                                        "children": [
                                            {
                                                "id": 249,
                                                "parent_id": 248,
                                                "text": "STICKERS CRYSTAL",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 56,
                                                "children": []
                                            },
                                            {
                                                "id": 410,
                                                "parent_id": 248,
                                                "text": "STICKERS",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 54,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 285,
                                        "parent_id": 11,
                                        "text": "AGRAFAGES",
                                        "is_active": true,
                                        "position": 13,
                                        "level": 4,
                                        "product_count": 74,
                                        "children": [
                                            {
                                                "id": 286,
                                                "parent_id": 285,
                                                "text": "AGRAFEUSES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 60,
                                                "children": []
                                            },
                                            {
                                                "id": 422,
                                                "parent_id": 285,
                                                "text": "AGRAFES & OTE AGRAFES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 2242,
                                                "parent_id": 285,
                                                "text": "ADHESIF DOUBLE FACE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 307,
                                        "parent_id": 11,
                                        "text": "COULEURS DE DECORATION",
                                        "is_active": true,
                                        "position": 14,
                                        "level": 4,
                                        "product_count": 98,
                                        "children": [
                                            {
                                                "id": 308,
                                                "parent_id": 307,
                                                "text": "CERAMIC",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 28,
                                                "children": []
                                            },
                                            {
                                                "id": 1943,
                                                "parent_id": 307,
                                                "text": "DECO",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 45,
                                                "children": []
                                            },
                                            {
                                                "id": 1947,
                                                "parent_id": 307,
                                                "text": "SETASILK",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 25,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 324,
                                        "parent_id": 11,
                                        "text": "BAGAGERIE & ACCESSOIRES",
                                        "is_active": true,
                                        "position": 15,
                                        "level": 4,
                                        "product_count": 59,
                                        "children": [
                                            {
                                                "id": 325,
                                                "parent_id": 324,
                                                "text": "SAC À DOS",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 53,
                                                "children": []
                                            },
                                            {
                                                "id": 2231,
                                                "parent_id": 324,
                                                "text": "ACCESSOIRES BAGAGERIE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 354,
                                        "parent_id": 11,
                                        "text": "AQUARELLE",
                                        "is_active": true,
                                        "position": 16,
                                        "level": 4,
                                        "product_count": 16,
                                        "children": [
                                            {
                                                "id": 355,
                                                "parent_id": 354,
                                                "text": "AQUARELLES FINES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 358,
                                        "parent_id": 11,
                                        "text": "GOUACHE",
                                        "is_active": true,
                                        "position": 17,
                                        "level": 4,
                                        "product_count": 8,
                                        "children": [
                                            {
                                                "id": 359,
                                                "parent_id": 358,
                                                "text": "GOUACHE STUDIO",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 8,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 428,
                                        "parent_id": 11,
                                        "text": "JEUX EDUCATIFS & JOUET",
                                        "is_active": true,
                                        "position": 18,
                                        "level": 4,
                                        "product_count": 77,
                                        "children": [
                                            {
                                                "id": 429,
                                                "parent_id": 428,
                                                "text": "JEUX EDUCATIFS",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 77,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 437,
                                        "parent_id": 11,
                                        "text": "INSTRUMENTS DE COUPE ET DE PERFORATION",
                                        "is_active": true,
                                        "position": 19,
                                        "level": 4,
                                        "product_count": 58,
                                        "children": [
                                            {
                                                "id": 438,
                                                "parent_id": 437,
                                                "text": "CISEAUX",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 26,
                                                "children": []
                                            },
                                            {
                                                "id": 441,
                                                "parent_id": 437,
                                                "text": "CUTTERS & LAMES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 25,
                                                "children": []
                                            },
                                            {
                                                "id": 1948,
                                                "parent_id": 437,
                                                "text": "CISAILLES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 850,
                                        "parent_id": 11,
                                        "text": "COULEURS À L HUILE",
                                        "is_active": true,
                                        "position": 22,
                                        "level": 4,
                                        "product_count": 170,
                                        "children": [
                                            {
                                                "id": 851,
                                                "parent_id": 850,
                                                "text": "ART CREATION À L HUILE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 62,
                                                "children": []
                                            },
                                            {
                                                "id": 859,
                                                "parent_id": 850,
                                                "text": "HUILE STUDIO XL FINE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 108,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 873,
                                        "parent_id": 11,
                                        "text": "DESSIN ET ART GRAPHIQUE",
                                        "is_active": true,
                                        "position": 23,
                                        "level": 4,
                                        "product_count": 347,
                                        "children": [
                                            {
                                                "id": 874,
                                                "parent_id": 873,
                                                "text": "OUTILS DE CALIGRAPHIE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 28,
                                                "children": []
                                            },
                                            {
                                                "id": 896,
                                                "parent_id": 873,
                                                "text": "ENCRES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 89,
                                                "children": []
                                            },
                                            {
                                                "id": 1825,
                                                "parent_id": 873,
                                                "text": "CRAYON GRAPHITE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 65,
                                                "children": []
                                            },
                                            {
                                                "id": 1829,
                                                "parent_id": 873,
                                                "text": "GOMME",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 1831,
                                                "parent_id": 873,
                                                "text": "PASTEL SEC ET A L HUILE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 22,
                                                "children": []
                                            },
                                            {
                                                "id": 1945,
                                                "parent_id": 873,
                                                "text": "CRAYON GRAPHITE CRAIE & FUSAIN",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 1981,
                                                "parent_id": 873,
                                                "text": "GOMME ESTOMPE & GRATTOIR",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 2260,
                                                "parent_id": 873,
                                                "text": "PEINTURE EN SPRAY",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 125,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1551,
                                        "parent_id": 11,
                                        "text": "FOURNITURES ET ACCESSOIRES",
                                        "is_active": true,
                                        "position": 24,
                                        "level": 4,
                                        "product_count": 755,
                                        "children": [
                                            {
                                                "id": 1552,
                                                "parent_id": 1551,
                                                "text": "PALETTE DE PEINTURE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            },
                                            {
                                                "id": 1556,
                                                "parent_id": 1551,
                                                "text": "CISEAUX ECOLIER",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 180,
                                                "children": []
                                            },
                                            {
                                                "id": 1560,
                                                "parent_id": 1551,
                                                "text": "TAILLE CRAYONS ECOLIER",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 249,
                                                "children": []
                                            },
                                            {
                                                "id": 1696,
                                                "parent_id": 1551,
                                                "text": "PINCEAUX ECOLIER",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            },
                                            {
                                                "id": 1700,
                                                "parent_id": 1551,
                                                "text": "ETIQUETTES ECOLIER",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            },
                                            {
                                                "id": 1738,
                                                "parent_id": 1551,
                                                "text": "ACCESSOIR ECOLIER",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 1743,
                                                "parent_id": 1551,
                                                "text": "ACCESSOIRES DE FIXATION",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 33,
                                                "children": []
                                            },
                                            {
                                                "id": 1840,
                                                "parent_id": 1551,
                                                "text": "GOURDES & PORTES MANGER",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 48,
                                                "children": []
                                            },
                                            {
                                                "id": 1915,
                                                "parent_id": 1551,
                                                "text": "PATES À MODELER",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 132,
                                                "children": []
                                            },
                                            {
                                                "id": 1918,
                                                "parent_id": 1551,
                                                "text": "TAILLE CRAYONS",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 1963,
                                                "parent_id": 1551,
                                                "text": "PEINTURES",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 2125,
                                                "parent_id": 1551,
                                                "text": "TABLIER",
                                                "is_active": true,
                                                "position": 12,
                                                "level": 5,
                                                "product_count": 50,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1851,
                                        "parent_id": 11,
                                        "text": "MOULAGE COLLAGE & MODELAGE",
                                        "is_active": true,
                                        "position": 25,
                                        "level": 4,
                                        "product_count": 19,
                                        "children": [
                                            {
                                                "id": 1852,
                                                "parent_id": 1851,
                                                "text": "ARGILES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2222,
                                        "parent_id": 11,
                                        "text": "POCHETTE",
                                        "is_active": true,
                                        "position": 26,
                                        "level": 4,
                                        "product_count": 5,
                                        "children": [
                                            {
                                                "id": 2223,
                                                "parent_id": 2222,
                                                "text": "POCHETTE DE PLASTIFICATION",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 5,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2239,
                                        "parent_id": 11,
                                        "text": "COLLES",
                                        "is_active": true,
                                        "position": 27,
                                        "level": 4,
                                        "product_count": 136,
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": 14,
                                "parent_id": 3,
                                "text": "BEAUX ARTS",
                                "is_active": true,
                                "position": 4,
                                "level": 3,
                                "product_count": 3367,
                                "children": [
                                    {
                                        "id": 47,
                                        "parent_id": 14,
                                        "text": "ECRITURE & CORRECTION",
                                        "is_active": true,
                                        "position": 2,
                                        "level": 4,
                                        "product_count": 298,
                                        "children": [
                                            {
                                                "id": 48,
                                                "parent_id": 47,
                                                "text": "CRAYONS NOIR",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 111,
                                                "children": []
                                            },
                                            {
                                                "id": 89,
                                                "parent_id": 47,
                                                "text": "PORTES MINES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 40,
                                                "children": []
                                            },
                                            {
                                                "id": 119,
                                                "parent_id": 47,
                                                "text": "MARQUEURS PERMANENTS",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 97,
                                                "children": []
                                            },
                                            {
                                                "id": 212,
                                                "parent_id": 47,
                                                "text": "MINES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            },
                                            {
                                                "id": 268,
                                                "parent_id": 47,
                                                "text": "GOMMES",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 44,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 55,
                                        "parent_id": 14,
                                        "text": "COLORIAGE",
                                        "is_active": true,
                                        "position": 3,
                                        "level": 4,
                                        "product_count": 640,
                                        "children": [
                                            {
                                                "id": 56,
                                                "parent_id": 55,
                                                "text": "CRAYONS COULEURS",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 138,
                                                "children": []
                                            },
                                            {
                                                "id": 60,
                                                "parent_id": 55,
                                                "text": "CRAYONS À CIRE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 22,
                                                "children": []
                                            },
                                            {
                                                "id": 64,
                                                "parent_id": 55,
                                                "text": "CRAYONS AQUARELLABLE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            },
                                            {
                                                "id": 72,
                                                "parent_id": 55,
                                                "text": "FEUTRES DE COLORIAGE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 106,
                                                "children": []
                                            },
                                            {
                                                "id": 76,
                                                "parent_id": 55,
                                                "text": "FEUTRE POINTE FINE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 136,
                                                "children": []
                                            },
                                            {
                                                "id": 127,
                                                "parent_id": 55,
                                                "text": "PEINTURES",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 156,
                                                "children": []
                                            },
                                            {
                                                "id": 206,
                                                "parent_id": 55,
                                                "text": "AQUARELLES",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 24,
                                                "children": []
                                            },
                                            {
                                                "id": 314,
                                                "parent_id": 55,
                                                "text": "CRAYON DE COULEUR PRO",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 39,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 138,
                                        "parent_id": 14,
                                        "text": "COLLES, ADHESIFS & ACCESSOIRES",
                                        "is_active": true,
                                        "position": 4,
                                        "level": 4,
                                        "product_count": 96,
                                        "children": [
                                            {
                                                "id": 139,
                                                "parent_id": 138,
                                                "text": "COLLES LIQUIDES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            },
                                            {
                                                "id": 143,
                                                "parent_id": 138,
                                                "text": "COLLES STICK",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 37,
                                                "children": []
                                            },
                                            {
                                                "id": 216,
                                                "parent_id": 138,
                                                "text": "COLLE BLANCHE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 30,
                                                "children": []
                                            },
                                            {
                                                "id": 372,
                                                "parent_id": 138,
                                                "text": "COLLES GEL",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 376,
                                                "parent_id": 138,
                                                "text": "COLLES EN SPRAY",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 144,
                                        "parent_id": 14,
                                        "text": "MATERIELS BEAUX ARTS",
                                        "is_active": true,
                                        "position": 5,
                                        "level": 4,
                                        "product_count": 114,
                                        "children": [
                                            {
                                                "id": 145,
                                                "parent_id": 144,
                                                "text": "MATERIELS BEAUX ART",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 44,
                                                "children": []
                                            },
                                            {
                                                "id": 430,
                                                "parent_id": 144,
                                                "text": "CRAIES & FUSAIN",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 15,
                                                "children": []
                                            },
                                            {
                                                "id": 1837,
                                                "parent_id": 144,
                                                "text": "PINCEAUX",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 29,
                                                "children": []
                                            },
                                            {
                                                "id": 1976,
                                                "parent_id": 144,
                                                "text": "SACS & PORTE DOCUMENTS",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 5,
                                                "children": []
                                            },
                                            {
                                                "id": 1979,
                                                "parent_id": 144,
                                                "text": "CHEVALETS",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 2118,
                                                "parent_id": 144,
                                                "text": "SPATULES",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 152,
                                        "parent_id": 14,
                                        "text": "ACTIVITES CREATIVES",
                                        "is_active": true,
                                        "position": 6,
                                        "level": 4,
                                        "product_count": 344,
                                        "children": [
                                            {
                                                "id": 153,
                                                "parent_id": 152,
                                                "text": "CRISTAL ADHESIF",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 35,
                                                "children": []
                                            },
                                            {
                                                "id": 160,
                                                "parent_id": 152,
                                                "text": "PETIT MATERIEL DE CREATION",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 211,
                                                "children": []
                                            },
                                            {
                                                "id": 163,
                                                "parent_id": 152,
                                                "text": "FORMES EN MOUSSE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 54,
                                                "children": []
                                            },
                                            {
                                                "id": 382,
                                                "parent_id": 152,
                                                "text": "MOUSSE HOLOGRAPHIQUE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 385,
                                                "parent_id": 152,
                                                "text": "MOUSSE METALIQUE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 390,
                                                "parent_id": 152,
                                                "text": "PAILLETTE DECORATIVES",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            },
                                            {
                                                "id": 395,
                                                "parent_id": 152,
                                                "text": "MOUSSE SIMPLE",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 17,
                                                "children": []
                                            },
                                            {
                                                "id": 398,
                                                "parent_id": 152,
                                                "text": "MOUSSE PAILLETTE",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 168,
                                        "parent_id": 14,
                                        "text": "COULEURS ACRYLIQUES",
                                        "is_active": true,
                                        "position": 7,
                                        "level": 4,
                                        "product_count": 293,
                                        "children": [
                                            {
                                                "id": 169,
                                                "parent_id": 168,
                                                "text": "ACRYLIQUE STUDIO",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 118,
                                                "children": []
                                            },
                                            {
                                                "id": 228,
                                                "parent_id": 168,
                                                "text": "AUXILIAIRE POUR ACRYLIQUE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 49,
                                                "children": []
                                            },
                                            {
                                                "id": 230,
                                                "parent_id": 168,
                                                "text": "ACRYLIQUE STANDARD SERIE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 90,
                                                "children": []
                                            },
                                            {
                                                "id": 239,
                                                "parent_id": 168,
                                                "text": "ART CREATION ACRYLIQUES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 37,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 174,
                                        "parent_id": 14,
                                        "text": "SUPPORTS EN TOILE",
                                        "is_active": true,
                                        "position": 8,
                                        "level": 4,
                                        "product_count": 58,
                                        "children": [
                                            {
                                                "id": 175,
                                                "parent_id": 174,
                                                "text": "CHASSIS TOILE COTON",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 43,
                                                "children": []
                                            },
                                            {
                                                "id": 180,
                                                "parent_id": 174,
                                                "text": "BLOC DE TOILE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 1857,
                                                "parent_id": 174,
                                                "text": "CARTONS TOILÉS",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 183,
                                        "parent_id": 14,
                                        "text": "SUPPORTS EN PAPIER",
                                        "is_active": true,
                                        "position": 9,
                                        "level": 4,
                                        "product_count": 92,
                                        "children": [
                                            {
                                                "id": 184,
                                                "parent_id": 183,
                                                "text": "PAPIER ALBUM & BLOC",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 63,
                                                "children": []
                                            },
                                            {
                                                "id": 401,
                                                "parent_id": 183,
                                                "text": "CARTONS PLUME & ONDULEE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 18,
                                                "children": []
                                            },
                                            {
                                                "id": 2117,
                                                "parent_id": 183,
                                                "text": "CARTONS PLUME & ONDULES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 11,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 356,
                                        "parent_id": 14,
                                        "text": "GOUACHE",
                                        "is_active": true,
                                        "position": 13,
                                        "level": 4,
                                        "product_count": 8,
                                        "children": [
                                            {
                                                "id": 357,
                                                "parent_id": 356,
                                                "text": "GOUACHE STUDIO",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 8,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 832,
                                        "parent_id": 14,
                                        "text": "COULEURS À L HUILE",
                                        "is_active": true,
                                        "position": 15,
                                        "level": 4,
                                        "product_count": 220,
                                        "children": [
                                            {
                                                "id": 833,
                                                "parent_id": 832,
                                                "text": "ART CREATION À L HUILE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 62,
                                                "children": []
                                            },
                                            {
                                                "id": 858,
                                                "parent_id": 832,
                                                "text": "HUILE STUDIO XL FINE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 108,
                                                "children": []
                                            },
                                            {
                                                "id": 860,
                                                "parent_id": 832,
                                                "text": "AUXILIAIRE À L HUILE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 50,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1169,
                                        "parent_id": 14,
                                        "text": "DESSIN ET ESQUISSE",
                                        "is_active": true,
                                        "position": 20,
                                        "level": 4,
                                        "product_count": 1,
                                        "children": [
                                            {
                                                "id": 1170,
                                                "parent_id": 1169,
                                                "text": "CRAYON GRAPHITE & CRAIE ET FUSAIN",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1501,
                                        "parent_id": 14,
                                        "text": "AQUARELLE",
                                        "is_active": true,
                                        "position": 22,
                                        "level": 4,
                                        "product_count": 19,
                                        "children": [
                                            {
                                                "id": 1502,
                                                "parent_id": 1501,
                                                "text": "AQUARELLES FINES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            },
                                            {
                                                "id": 1758,
                                                "parent_id": 1501,
                                                "text": "AUXILIARE AQUARELLE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1553,
                                        "parent_id": 14,
                                        "text": "FOURNITURES ET ACCESSOIRES",
                                        "is_active": true,
                                        "position": 23,
                                        "level": 4,
                                        "product_count": 82,
                                        "children": [
                                            {
                                                "id": 1554,
                                                "parent_id": 1553,
                                                "text": "PALETTE DE PEINTURE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            },
                                            {
                                                "id": 1919,
                                                "parent_id": 1553,
                                                "text": "TAILLE CRAYONS",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 1964,
                                                "parent_id": 1553,
                                                "text": "PEINTURES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 2126,
                                                "parent_id": 1553,
                                                "text": "TABLIER",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 50,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1735,
                                        "parent_id": 14,
                                        "text": "COULEURS DE DECORATION",
                                        "is_active": true,
                                        "position": 24,
                                        "level": 4,
                                        "product_count": 310,
                                        "children": [
                                            {
                                                "id": 1736,
                                                "parent_id": 1735,
                                                "text": "CERAMIC",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 28,
                                                "children": []
                                            },
                                            {
                                                "id": 1744,
                                                "parent_id": 1735,
                                                "text": "CERNE RELIEF",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 1745,
                                                "parent_id": 1735,
                                                "text": "VITREA",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 30,
                                                "children": []
                                            },
                                            {
                                                "id": 1746,
                                                "parent_id": 1735,
                                                "text": "SETACOLOR",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 17,
                                                "children": []
                                            },
                                            {
                                                "id": 1747,
                                                "parent_id": 1735,
                                                "text": "SETACOLOR 3D",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 30,
                                                "children": []
                                            },
                                            {
                                                "id": 1748,
                                                "parent_id": 1735,
                                                "text": "PEINTURE VITRAIL",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 47,
                                                "children": []
                                            },
                                            {
                                                "id": 1749,
                                                "parent_id": 1735,
                                                "text": "PRISME",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 29,
                                                "children": []
                                            },
                                            {
                                                "id": 1750,
                                                "parent_id": 1735,
                                                "text": "MOON",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            },
                                            {
                                                "id": 1759,
                                                "parent_id": 1735,
                                                "text": "Auxiliare vitrail",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 1921,
                                                "parent_id": 1735,
                                                "text": "DECO",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 48,
                                                "children": []
                                            },
                                            {
                                                "id": 1922,
                                                "parent_id": 1735,
                                                "text": "SETASILK",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 25,
                                                "children": []
                                            },
                                            {
                                                "id": 1975,
                                                "parent_id": 1735,
                                                "text": "PEINTURE PORCELAINE",
                                                "is_active": true,
                                                "position": 12,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1794,
                                        "parent_id": 14,
                                        "text": "DESSIN ET ART GRAPHIQUE",
                                        "is_active": true,
                                        "position": 25,
                                        "level": 4,
                                        "product_count": 748,
                                        "children": [
                                            {
                                                "id": 1795,
                                                "parent_id": 1794,
                                                "text": "FEUTRE MARQUEUR ET STYLO",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 47,
                                                "children": []
                                            },
                                            {
                                                "id": 1796,
                                                "parent_id": 1794,
                                                "text": "OUTILS DE CALIGRAPHIE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 28,
                                                "children": []
                                            },
                                            {
                                                "id": 1797,
                                                "parent_id": 1794,
                                                "text": "ENCRES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 89,
                                                "children": []
                                            },
                                            {
                                                "id": 1823,
                                                "parent_id": 1794,
                                                "text": "CRAYON GRAPHITE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 65,
                                                "children": []
                                            },
                                            {
                                                "id": 1827,
                                                "parent_id": 1794,
                                                "text": "GOMME",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 1830,
                                                "parent_id": 1794,
                                                "text": "PASTEL SEC ET A L HUILE",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 22,
                                                "children": []
                                            },
                                            {
                                                "id": 1833,
                                                "parent_id": 1794,
                                                "text": "FEUTRE",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 38,
                                                "children": []
                                            },
                                            {
                                                "id": 1846,
                                                "parent_id": 1794,
                                                "text": "FEUTRE MARQUEUR & STYLO",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 316,
                                                "children": []
                                            },
                                            {
                                                "id": 1944,
                                                "parent_id": 1794,
                                                "text": "CRAYON GRAPHITE CRAIE & FUSAIN",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 1980,
                                                "parent_id": 1794,
                                                "text": "GOMME ESTOMPE & GRATTOIR",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 2259,
                                                "parent_id": 1794,
                                                "text": "PEINTURE EN SPRAY",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 125,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1853,
                                        "parent_id": 14,
                                        "text": "MOULAGE COLLAGE & MODELAGE",
                                        "is_active": true,
                                        "position": 26,
                                        "level": 4,
                                        "product_count": 19,
                                        "children": [
                                            {
                                                "id": 1854,
                                                "parent_id": 1853,
                                                "text": "ARGILES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2128,
                                        "parent_id": 14,
                                        "text": "Dessin & Art graphique",
                                        "is_active": true,
                                        "position": 27,
                                        "level": 4,
                                        "product_count": 3,
                                        "children": [
                                            {
                                                "id": 2129,
                                                "parent_id": 2128,
                                                "text": "FEUTRE MARQUEUR & STYLO",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2247,
                                        "parent_id": 14,
                                        "text": "COLLES",
                                        "is_active": true,
                                        "position": 28,
                                        "level": 4,
                                        "product_count": 118,
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": 21,
                                "parent_id": 3,
                                "text": "BUREAUTIQUE & INFORMATIQUE",
                                "is_active": true,
                                "position": 5,
                                "level": 3,
                                "product_count": 3436,
                                "children": [
                                    {
                                        "id": 22,
                                        "parent_id": 21,
                                        "text": "CALCULATRICES",
                                        "is_active": true,
                                        "position": 1,
                                        "level": 4,
                                        "product_count": 69,
                                        "children": [
                                            {
                                                "id": 23,
                                                "parent_id": 22,
                                                "text": "CALCULATRICES DE POCHE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 26,
                                                "parent_id": 22,
                                                "text": "CALCULATRICES DE BUREAU",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 22,
                                                "children": []
                                            },
                                            {
                                                "id": 242,
                                                "parent_id": 22,
                                                "text": "CALCULATRICES IMPRIMANTES & RUBANS",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            },
                                            {
                                                "id": 335,
                                                "parent_id": 22,
                                                "text": "CALCULATRICES SCIENTIFIQUES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 28,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 29,
                                        "parent_id": 21,
                                        "text": "SUPPORTS EN PAPIER",
                                        "is_active": true,
                                        "position": 2,
                                        "level": 4,
                                        "product_count": 315,
                                        "children": [
                                            {
                                                "id": 30,
                                                "parent_id": 29,
                                                "text": "CAHIER & REGISTRE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 170,
                                                "children": []
                                            },
                                            {
                                                "id": 270,
                                                "parent_id": 29,
                                                "text": "FEUILLES MOBILES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            },
                                            {
                                                "id": 288,
                                                "parent_id": 29,
                                                "text": "BLOC & CARNETS",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 80,
                                                "children": []
                                            },
                                            {
                                                "id": 407,
                                                "parent_id": 29,
                                                "text": "BRISTOL",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 416,
                                                "parent_id": 29,
                                                "text": "BUVARD",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 417,
                                                "parent_id": 29,
                                                "text": "PAPIER BLANC",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 5,
                                                "children": []
                                            },
                                            {
                                                "id": 891,
                                                "parent_id": 29,
                                                "text": "ETIQUETTES",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 18,
                                                "children": []
                                            },
                                            {
                                                "id": 2157,
                                                "parent_id": 29,
                                                "text": "PAPIER COUCHE",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 2158,
                                                "parent_id": 29,
                                                "text": "PAPIER PHOTO",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 2235,
                                                "parent_id": 29,
                                                "text": "BLOCS",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 40,
                                        "parent_id": 21,
                                        "text": "ECRITURE & CORRECTION",
                                        "is_active": true,
                                        "position": 3,
                                        "level": 4,
                                        "product_count": 1190,
                                        "children": [
                                            {
                                                "id": 41,
                                                "parent_id": 40,
                                                "text": "CRAYONS NOIR",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 109,
                                                "children": []
                                            },
                                            {
                                                "id": 78,
                                                "parent_id": 40,
                                                "text": "GOMMES ECOLIER",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 122,
                                                "children": []
                                            },
                                            {
                                                "id": 86,
                                                "parent_id": 40,
                                                "text": "PORTES MINES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 40,
                                                "children": []
                                            },
                                            {
                                                "id": 95,
                                                "parent_id": 40,
                                                "text": "STYLOS À PLUMES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 32,
                                                "children": []
                                            },
                                            {
                                                "id": 98,
                                                "parent_id": 40,
                                                "text": "SURLIGNEUR",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 293,
                                                "children": []
                                            },
                                            {
                                                "id": 105,
                                                "parent_id": 40,
                                                "text": "STYLOS ENCRE GEL",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 138,
                                                "children": []
                                            },
                                            {
                                                "id": 108,
                                                "parent_id": 40,
                                                "text": "STYLOS ENCRE LIQUIDE",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 41,
                                                "children": []
                                            },
                                            {
                                                "id": 111,
                                                "parent_id": 40,
                                                "text": "STYLOS ENCRE VISQUEUSE",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 173,
                                                "children": []
                                            },
                                            {
                                                "id": 114,
                                                "parent_id": 40,
                                                "text": "MARQUEURS PERMANENTS",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 97,
                                                "children": []
                                            },
                                            {
                                                "id": 122,
                                                "parent_id": 40,
                                                "text": "CARTOUCHES",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 26,
                                                "children": []
                                            },
                                            {
                                                "id": 190,
                                                "parent_id": 40,
                                                "text": "MARQUEURS POUR TABLEAU BLANC",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            },
                                            {
                                                "id": 200,
                                                "parent_id": 40,
                                                "text": "CORRECTEURS EN STYLOS",
                                                "is_active": true,
                                                "position": 12,
                                                "level": 5,
                                                "product_count": 25,
                                                "children": []
                                            },
                                            {
                                                "id": 209,
                                                "parent_id": 40,
                                                "text": "MINES",
                                                "is_active": true,
                                                "position": 13,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            },
                                            {
                                                "id": 264,
                                                "parent_id": 40,
                                                "text": "GOMMES",
                                                "is_active": true,
                                                "position": 14,
                                                "level": 5,
                                                "product_count": 43,
                                                "children": []
                                            },
                                            {
                                                "id": 347,
                                                "parent_id": 40,
                                                "text": "CRAIES",
                                                "is_active": true,
                                                "position": 15,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            },
                                            {
                                                "id": 351,
                                                "parent_id": 40,
                                                "text": "EFFACEUR",
                                                "is_active": true,
                                                "position": 16,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 379,
                                                "parent_id": 40,
                                                "text": "CORRECTEUR À RUBAN",
                                                "is_active": true,
                                                "position": 17,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 134,
                                        "parent_id": 21,
                                        "text": "COLLES, ADHESIFS & ACCESSOIRES",
                                        "is_active": true,
                                        "position": 5,
                                        "level": 4,
                                        "product_count": 114,
                                        "children": [
                                            {
                                                "id": 135,
                                                "parent_id": 134,
                                                "text": "COLLES LIQUIDES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 20,
                                                "children": []
                                            },
                                            {
                                                "id": 141,
                                                "parent_id": 134,
                                                "text": "COLLES STICK",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 37,
                                                "children": []
                                            },
                                            {
                                                "id": 214,
                                                "parent_id": 134,
                                                "text": "COLLE BLANCHE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 30,
                                                "children": []
                                            },
                                            {
                                                "id": 219,
                                                "parent_id": 134,
                                                "text": "RUBAN ADHESIF",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 363,
                                                "parent_id": 134,
                                                "text": "COLLES FORTE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 8,
                                                "children": []
                                            },
                                            {
                                                "id": 365,
                                                "parent_id": 134,
                                                "text": "COLLE EN PATE",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 369,
                                                "parent_id": 134,
                                                "text": "COLLES GEL",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 374,
                                                "parent_id": 134,
                                                "text": "COLLES EN SPRAY",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 1954,
                                                "parent_id": 134,
                                                "text": "PISTOLETS DE COLLES ET RECHARGES",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            },
                                            {
                                                "id": 1957,
                                                "parent_id": 134,
                                                "text": "COLLES DE MONTAGE",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 5,
                                                "children": []
                                            },
                                            {
                                                "id": 1959,
                                                "parent_id": 134,
                                                "text": "RUBAN ADHESIF D EMBALLAGE",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 2152,
                                                "parent_id": 134,
                                                "text": "DEVIDOIR RUBAN ADHESIF",
                                                "is_active": true,
                                                "position": 12,
                                                "level": 5,
                                                "product_count": 0,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 225,
                                        "parent_id": 21,
                                        "text": "BAGAGERIE",
                                        "is_active": true,
                                        "position": 6,
                                        "level": 4,
                                        "product_count": 149,
                                        "children": [
                                            {
                                                "id": 226,
                                                "parent_id": 225,
                                                "text": "SAC À DOS LAPTOP",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 39,
                                                "children": []
                                            },
                                            {
                                                "id": 299,
                                                "parent_id": 225,
                                                "text": "CARTABLE ADMINISTRATIF",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 300,
                                                "parent_id": 225,
                                                "text": "SACOCHE À EPAULE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 32,
                                                "children": []
                                            },
                                            {
                                                "id": 301,
                                                "parent_id": 225,
                                                "text": "PORTE FOLIO",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 323,
                                                "parent_id": 225,
                                                "text": "SAC À DOS",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 47,
                                                "children": []
                                            },
                                            {
                                                "id": 691,
                                                "parent_id": 225,
                                                "text": "CARTABLE",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 23,
                                                "children": []
                                            },
                                            {
                                                "id": 1147,
                                                "parent_id": 225,
                                                "text": "VALISES",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 1842,
                                                "parent_id": 225,
                                                "text": "SACOCHE PC ET HOUSSE",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 243,
                                        "parent_id": 21,
                                        "text": "EQUIPEMENT ELECTRONIQUE",
                                        "is_active": true,
                                        "position": 7,
                                        "level": 4,
                                        "product_count": 63,
                                        "children": [
                                            {
                                                "id": 244,
                                                "parent_id": 243,
                                                "text": "RECHARGES ETIQUETEUSES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 42,
                                                "children": []
                                            },
                                            {
                                                "id": 336,
                                                "parent_id": 243,
                                                "text": "ETIQUETEUSE ELECTRONIQUES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 252,
                                        "parent_id": 21,
                                        "text": "EQUIPEMENT DE BUREAU",
                                        "is_active": true,
                                        "position": 8,
                                        "level": 4,
                                        "product_count": 99,
                                        "children": [
                                            {
                                                "id": 253,
                                                "parent_id": 252,
                                                "text": "GLOBES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 297,
                                                "parent_id": 252,
                                                "text": "TABLEAU BLANC",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 31,
                                                "children": []
                                            },
                                            {
                                                "id": 338,
                                                "parent_id": 252,
                                                "text": "DESTRUCTEURS",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 15,
                                                "children": []
                                            },
                                            {
                                                "id": 876,
                                                "parent_id": 252,
                                                "text": "AFFICHAGE & PLANNINGS",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            },
                                            {
                                                "id": 877,
                                                "parent_id": 252,
                                                "text": "PLASTIFIEUSE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 893,
                                                "parent_id": 252,
                                                "text": "MODULE DE CLASSEMENT",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            },
                                            {
                                                "id": 2156,
                                                "parent_id": 252,
                                                "text": "ARMOIR A CLES",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 15,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 259,
                                        "parent_id": 21,
                                        "text": "PROTEGES",
                                        "is_active": true,
                                        "position": 9,
                                        "level": 4,
                                        "product_count": 273,
                                        "children": [
                                            {
                                                "id": 260,
                                                "parent_id": 259,
                                                "text": "PROTEGES A RABATS",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 11,
                                                "children": []
                                            },
                                            {
                                                "id": 262,
                                                "parent_id": 259,
                                                "text": "PROTEGES LIVRES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 44,
                                                "children": []
                                            },
                                            {
                                                "id": 276,
                                                "parent_id": 259,
                                                "text": "PROTEGE DOCUMENT",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 211,
                                                "children": []
                                            },
                                            {
                                                "id": 2236,
                                                "parent_id": 259,
                                                "text": "COUVERT PAGE DE GARDE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 271,
                                        "parent_id": 21,
                                        "text": "CHEMISES",
                                        "is_active": true,
                                        "position": 10,
                                        "level": 4,
                                        "product_count": 91,
                                        "children": [
                                            {
                                                "id": 272,
                                                "parent_id": 271,
                                                "text": "CHEMISE À RABAT",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 87,
                                                "children": []
                                            },
                                            {
                                                "id": 295,
                                                "parent_id": 271,
                                                "text": "CHEMISE DOSSIER",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 425,
                                                "parent_id": 271,
                                                "text": "SOUS-CHEMISE DOSSIER",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 279,
                                        "parent_id": 21,
                                        "text": "AGRAFAGES",
                                        "is_active": true,
                                        "position": 11,
                                        "level": 4,
                                        "product_count": 74,
                                        "children": [
                                            {
                                                "id": 280,
                                                "parent_id": 279,
                                                "text": "AGRAFEUSES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 60,
                                                "children": []
                                            },
                                            {
                                                "id": 419,
                                                "parent_id": 279,
                                                "text": "AGRAFES & OTE AGRAFES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 2241,
                                                "parent_id": 279,
                                                "text": "ADHESIF DOUBLE FACE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 289,
                                        "parent_id": 21,
                                        "text": "POCHETTE",
                                        "is_active": true,
                                        "position": 12,
                                        "level": 4,
                                        "product_count": 129,
                                        "children": [
                                            {
                                                "id": 290,
                                                "parent_id": 289,
                                                "text": "POCHETTE ENVELOPPE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 75,
                                                "children": []
                                            },
                                            {
                                                "id": 293,
                                                "parent_id": 289,
                                                "text": "POCHETTE ZIP",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 48,
                                                "children": []
                                            },
                                            {
                                                "id": 423,
                                                "parent_id": 289,
                                                "text": "POCHETTE PERFOREE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 2217,
                                                "parent_id": 289,
                                                "text": "POCHETTE DE PLASTIFICATION",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 5,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 326,
                                        "parent_id": 21,
                                        "text": "CLASSEMENT & ARCHIVAGE",
                                        "is_active": true,
                                        "position": 13,
                                        "level": 4,
                                        "product_count": 273,
                                        "children": [
                                            {
                                                "id": 327,
                                                "parent_id": 326,
                                                "text": "BOITE DE CLASSEMENT",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 57,
                                                "children": []
                                            },
                                            {
                                                "id": 330,
                                                "parent_id": 326,
                                                "text": "CLASSEURS",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 126,
                                                "children": []
                                            },
                                            {
                                                "id": 332,
                                                "parent_id": 326,
                                                "text": "PORTE-CARTES DE VISITE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 8,
                                                "children": []
                                            },
                                            {
                                                "id": 333,
                                                "parent_id": 326,
                                                "text": "TRIEURS",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 15,
                                                "children": []
                                            },
                                            {
                                                "id": 918,
                                                "parent_id": 326,
                                                "text": "BOITE D ARCHIVES",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 2150,
                                                "parent_id": 326,
                                                "text": "CORBEILLE A COURRIERS",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 20,
                                                "children": []
                                            },
                                            {
                                                "id": 2151,
                                                "parent_id": 326,
                                                "text": "PORTE-REVUES",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 20,
                                                "children": []
                                            },
                                            {
                                                "id": 2163,
                                                "parent_id": 326,
                                                "text": "INTERCALAIRES",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 2220,
                                                "parent_id": 326,
                                                "text": "RELIURES & ACCESSOIRES",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 11,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 343,
                                        "parent_id": 21,
                                        "text": "TRACAGES",
                                        "is_active": true,
                                        "position": 14,
                                        "level": 4,
                                        "product_count": 2,
                                        "children": [
                                            {
                                                "id": 344,
                                                "parent_id": 343,
                                                "text": "COMPAS TECHNIQUE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 431,
                                        "parent_id": 21,
                                        "text": "INSTRUMENTS DE COUPE ET DE PERFORATION",
                                        "is_active": true,
                                        "position": 15,
                                        "level": 4,
                                        "product_count": 70,
                                        "children": [
                                            {
                                                "id": 432,
                                                "parent_id": 431,
                                                "text": "CISEAUX",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 26,
                                                "children": []
                                            },
                                            {
                                                "id": 439,
                                                "parent_id": 431,
                                                "text": "CUTTERS & LAMES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 25,
                                                "children": []
                                            },
                                            {
                                                "id": 1843,
                                                "parent_id": 431,
                                                "text": "PERFORATEURS",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            },
                                            {
                                                "id": 1858,
                                                "parent_id": 431,
                                                "text": "CISAILLES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 888,
                                        "parent_id": 21,
                                        "text": "BADGES ET ACCESSOIRES",
                                        "is_active": true,
                                        "position": 17,
                                        "level": 4,
                                        "product_count": 16,
                                        "children": [
                                            {
                                                "id": 889,
                                                "parent_id": 888,
                                                "text": "BADGES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 890,
                                                "parent_id": 888,
                                                "text": "LACETS TEXTILES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1558,
                                        "parent_id": 21,
                                        "text": "FOURNITURES ET ACCESSOIRES",
                                        "is_active": true,
                                        "position": 18,
                                        "level": 4,
                                        "product_count": 392,
                                        "children": [
                                            {
                                                "id": 1559,
                                                "parent_id": 1558,
                                                "text": "TAILLE CRAYONS ECOLIER",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 249,
                                                "children": []
                                            },
                                            {
                                                "id": 1699,
                                                "parent_id": 1558,
                                                "text": "ETIQUETTES ECOLIER",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            },
                                            {
                                                "id": 1733,
                                                "parent_id": 1558,
                                                "text": "POT A CRAYON",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            },
                                            {
                                                "id": 1739,
                                                "parent_id": 1558,
                                                "text": "ACCESSOIRES DE FIXATION",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 33,
                                                "children": []
                                            },
                                            {
                                                "id": 1841,
                                                "parent_id": 1558,
                                                "text": "GOURDES & PORTES MANGER",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 48,
                                                "children": []
                                            },
                                            {
                                                "id": 1917,
                                                "parent_id": 1558,
                                                "text": "TAILLE CRAYONS",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 1949,
                                                "parent_id": 1558,
                                                "text": "LOUPES",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 1950,
                                                "parent_id": 1558,
                                                "text": "OUVRES LETTRES",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 2219,
                                                "parent_id": 1558,
                                                "text": "NETTOYANT TABLEAU BLANC",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 2244,
                                                "parent_id": 1558,
                                                "text": "TABLIER",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 8,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1860,
                                        "parent_id": 21,
                                        "text": "BOITE DE CLASSEMENT",
                                        "is_active": true,
                                        "position": 19,
                                        "level": 4,
                                        "product_count": 6,
                                        "children": [
                                            {
                                                "id": 1861,
                                                "parent_id": 1860,
                                                "text": "CHEMISE À RABAT",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2165,
                                        "parent_id": 21,
                                        "text": "COLLES",
                                        "is_active": true,
                                        "position": 20,
                                        "level": 4,
                                        "product_count": 154,
                                        "children": []
                                    },
                                    {
                                        "id": 2195,
                                        "parent_id": 21,
                                        "text": "EQUIPEMENT HOTEL",
                                        "is_active": true,
                                        "position": 21,
                                        "level": 4,
                                        "product_count": 40,
                                        "children": [
                                            {
                                                "id": 2196,
                                                "parent_id": 2195,
                                                "text": "EQUIPEMENTS DE CONFERENCE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 18,
                                                "children": []
                                            },
                                            {
                                                "id": 2197,
                                                "parent_id": 2195,
                                                "text": "SIGNALETIQUE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 2198,
                                                "parent_id": 2195,
                                                "text": "CENDRIER CORBEILLE & POUBELLE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2199,
                                        "parent_id": 21,
                                        "text": "EQUIPEMENT MAGASIN",
                                        "is_active": true,
                                        "position": 22,
                                        "level": 4,
                                        "product_count": 61,
                                        "children": [
                                            {
                                                "id": 2200,
                                                "parent_id": 2199,
                                                "text": "PANIERS & CHARIOTS",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 32,
                                                "children": []
                                            },
                                            {
                                                "id": 2201,
                                                "parent_id": 2199,
                                                "text": "ENCAISSEMENT",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 29,
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": 115,
                                "parent_id": 3,
                                "text": "BRICOLAGE",
                                "is_active": true,
                                "position": 7,
                                "level": 3,
                                "product_count": 769,
                                "children": [
                                    {
                                        "id": 116,
                                        "parent_id": 115,
                                        "text": "ECRITURE & CORRECTION",
                                        "is_active": true,
                                        "position": 1,
                                        "level": 4,
                                        "product_count": 188,
                                        "children": [
                                            {
                                                "id": 117,
                                                "parent_id": 116,
                                                "text": "MARQUEURS PERMANENTS",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 97,
                                                "children": []
                                            },
                                            {
                                                "id": 123,
                                                "parent_id": 116,
                                                "text": "CARTOUCHES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 26,
                                                "children": []
                                            },
                                            {
                                                "id": 191,
                                                "parent_id": 116,
                                                "text": "MARQUEURS POUR TABLEAU BLANC",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            },
                                            {
                                                "id": 201,
                                                "parent_id": 116,
                                                "text": "CORRECTEURS EN STYLOS",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 25,
                                                "children": []
                                            },
                                            {
                                                "id": 348,
                                                "parent_id": 116,
                                                "text": "CRAIES",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 128,
                                        "parent_id": 115,
                                        "text": "COLLES, ADHESIFS & ACCESSOIRES",
                                        "is_active": true,
                                        "position": 2,
                                        "level": 4,
                                        "product_count": 77,
                                        "children": [
                                            {
                                                "id": 129,
                                                "parent_id": 128,
                                                "text": "COLLES LIQUIDES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 20,
                                                "children": []
                                            },
                                            {
                                                "id": 217,
                                                "parent_id": 128,
                                                "text": "COLLE BLANCHE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 30,
                                                "children": []
                                            },
                                            {
                                                "id": 220,
                                                "parent_id": 128,
                                                "text": "RUBAN ADHESIF",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 362,
                                                "parent_id": 128,
                                                "text": "COLLES FORTE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 8,
                                                "children": []
                                            },
                                            {
                                                "id": 364,
                                                "parent_id": 128,
                                                "text": "COLLE EN PATE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 368,
                                                "parent_id": 128,
                                                "text": "COLLES GEL",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 373,
                                                "parent_id": 128,
                                                "text": "COLLES EN SPRAY",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 1955,
                                                "parent_id": 128,
                                                "text": "PISTOLETS DE COLLES ET RECHARGES",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            },
                                            {
                                                "id": 1956,
                                                "parent_id": 128,
                                                "text": "COLLES DE MONTAGE",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 5,
                                                "children": []
                                            },
                                            {
                                                "id": 1960,
                                                "parent_id": 128,
                                                "text": "RUBAN ADHESIF D EMBALLAGE",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 2153,
                                                "parent_id": 128,
                                                "text": "DEVIDOIR RUBAN ADHESIF",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 0,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 172,
                                        "parent_id": 115,
                                        "text": "COULEURS ACRYLIQUES",
                                        "is_active": true,
                                        "position": 3,
                                        "level": 4,
                                        "product_count": 245,
                                        "children": [
                                            {
                                                "id": 173,
                                                "parent_id": 172,
                                                "text": "ACRYLIQUE STUDIO",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 118,
                                                "children": []
                                            },
                                            {
                                                "id": 234,
                                                "parent_id": 172,
                                                "text": "ACRYLIQUE STANDARD SERIE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 90,
                                                "children": []
                                            },
                                            {
                                                "id": 241,
                                                "parent_id": 172,
                                                "text": "ART CREATION ACRYLIQUES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 37,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 245,
                                        "parent_id": 115,
                                        "text": "EQUIPEMENT ELECTRONIQUE",
                                        "is_active": true,
                                        "position": 4,
                                        "level": 4,
                                        "product_count": 62,
                                        "children": [
                                            {
                                                "id": 246,
                                                "parent_id": 245,
                                                "text": "RECHARGES ETIQUETEUSES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 42,
                                                "children": []
                                            },
                                            {
                                                "id": 337,
                                                "parent_id": 245,
                                                "text": "ETIQUETEUSE ELECTRONIQUES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            },
                                            {
                                                "id": 602,
                                                "parent_id": 245,
                                                "text": "CAISSES ENREGISTREUSES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 283,
                                        "parent_id": 115,
                                        "text": "AGRAFAGES",
                                        "is_active": true,
                                        "position": 5,
                                        "level": 4,
                                        "product_count": 74,
                                        "children": [
                                            {
                                                "id": 284,
                                                "parent_id": 283,
                                                "text": "AGRAFEUSES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 60,
                                                "children": []
                                            },
                                            {
                                                "id": 421,
                                                "parent_id": 283,
                                                "text": "AGRAFES & OTE AGRAFES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 2240,
                                                "parent_id": 283,
                                                "text": "ADHESIF DOUBLE FACE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 433,
                                        "parent_id": 115,
                                        "text": "INSTRUMENTS DE COUPE ET DE PERFORATION",
                                        "is_active": true,
                                        "position": 6,
                                        "level": 4,
                                        "product_count": 70,
                                        "children": [
                                            {
                                                "id": 434,
                                                "parent_id": 433,
                                                "text": "CISEAUX",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 26,
                                                "children": []
                                            },
                                            {
                                                "id": 440,
                                                "parent_id": 433,
                                                "text": "CUTTERS & LAMES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 25,
                                                "children": []
                                            },
                                            {
                                                "id": 1844,
                                                "parent_id": 433,
                                                "text": "PERFORATEURS",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 12,
                                                "children": []
                                            },
                                            {
                                                "id": 1859,
                                                "parent_id": 433,
                                                "text": "CISAILLES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 878,
                                        "parent_id": 115,
                                        "text": "EQUIPEMENT DE BUREAU",
                                        "is_active": true,
                                        "position": 7,
                                        "level": 4,
                                        "product_count": 3,
                                        "children": [
                                            {
                                                "id": 879,
                                                "parent_id": 878,
                                                "text": "PLASTIFIEUSE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1741,
                                        "parent_id": 115,
                                        "text": "FOURNITURES ET ACCESSOIRES",
                                        "is_active": true,
                                        "position": 8,
                                        "level": 4,
                                        "product_count": 33,
                                        "children": [
                                            {
                                                "id": 1742,
                                                "parent_id": 1741,
                                                "text": "ACCESSOIRES DE FIXATION",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 33,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2168,
                                        "parent_id": 115,
                                        "text": "COLLES",
                                        "is_active": true,
                                        "position": 9,
                                        "level": 4,
                                        "product_count": 94,
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": 770,
                                "parent_id": 3,
                                "text": "ECRITURE & COLORIAGE",
                                "is_active": true,
                                "position": 8,
                                "level": 3,
                                "product_count": 2601,
                                "children": [
                                    {
                                        "id": 773,
                                        "parent_id": 770,
                                        "text": "ECRITURE & CORRECTION",
                                        "is_active": true,
                                        "position": 2,
                                        "level": 4,
                                        "product_count": 1192,
                                        "children": [
                                            {
                                                "id": 774,
                                                "parent_id": 773,
                                                "text": "STYLOS ENCRE GEL",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 138,
                                                "children": []
                                            },
                                            {
                                                "id": 775,
                                                "parent_id": 773,
                                                "text": "STYLOS ENCRE VISQUEUSE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 175,
                                                "children": []
                                            },
                                            {
                                                "id": 778,
                                                "parent_id": 773,
                                                "text": "SURLIGNEUR",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 292,
                                                "children": []
                                            },
                                            {
                                                "id": 781,
                                                "parent_id": 773,
                                                "text": "CARTOUCHES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 26,
                                                "children": []
                                            },
                                            {
                                                "id": 782,
                                                "parent_id": 773,
                                                "text": "MARQUEURS PERMANENTS",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 97,
                                                "children": []
                                            },
                                            {
                                                "id": 783,
                                                "parent_id": 773,
                                                "text": "STYLOS ENCRE LIQUIDE",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 42,
                                                "children": []
                                            },
                                            {
                                                "id": 784,
                                                "parent_id": 773,
                                                "text": "STYLOS À PLUMES",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 32,
                                                "children": []
                                            },
                                            {
                                                "id": 785,
                                                "parent_id": 773,
                                                "text": "PORTES MINES",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 40,
                                                "children": []
                                            },
                                            {
                                                "id": 786,
                                                "parent_id": 773,
                                                "text": "GOMMES ECOLIER",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 122,
                                                "children": []
                                            },
                                            {
                                                "id": 790,
                                                "parent_id": 773,
                                                "text": "CRAYONS NOIR",
                                                "is_active": true,
                                                "position": 10,
                                                "level": 5,
                                                "product_count": 109,
                                                "children": []
                                            },
                                            {
                                                "id": 799,
                                                "parent_id": 773,
                                                "text": "MINES",
                                                "is_active": true,
                                                "position": 11,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            },
                                            {
                                                "id": 801,
                                                "parent_id": 773,
                                                "text": "CORRECTEURS EN STYLOS",
                                                "is_active": true,
                                                "position": 12,
                                                "level": 5,
                                                "product_count": 25,
                                                "children": []
                                            },
                                            {
                                                "id": 853,
                                                "parent_id": 773,
                                                "text": "MARQUEURS POUR TABLEAU BLANC",
                                                "is_active": true,
                                                "position": 13,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            },
                                            {
                                                "id": 861,
                                                "parent_id": 773,
                                                "text": "GOMMES",
                                                "is_active": true,
                                                "position": 14,
                                                "level": 5,
                                                "product_count": 43,
                                                "children": []
                                            },
                                            {
                                                "id": 898,
                                                "parent_id": 773,
                                                "text": "CRAIES",
                                                "is_active": true,
                                                "position": 15,
                                                "level": 5,
                                                "product_count": 21,
                                                "children": []
                                            },
                                            {
                                                "id": 899,
                                                "parent_id": 773,
                                                "text": "CORRECTEUR À RUBAN",
                                                "is_active": true,
                                                "position": 16,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            },
                                            {
                                                "id": 900,
                                                "parent_id": 773,
                                                "text": "EFFACEUR",
                                                "is_active": true,
                                                "position": 17,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 776,
                                        "parent_id": 770,
                                        "text": "COLORIAGE",
                                        "is_active": true,
                                        "position": 3,
                                        "level": 4,
                                        "product_count": 623,
                                        "children": [
                                            {
                                                "id": 777,
                                                "parent_id": 776,
                                                "text": "FEUTRES DE COLORIAGE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 106,
                                                "children": []
                                            },
                                            {
                                                "id": 779,
                                                "parent_id": 776,
                                                "text": "FEUTRE POINTE FINE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 136,
                                                "children": []
                                            },
                                            {
                                                "id": 780,
                                                "parent_id": 776,
                                                "text": "PEINTURES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 156,
                                                "children": []
                                            },
                                            {
                                                "id": 787,
                                                "parent_id": 776,
                                                "text": "CRAYONS COULEURS",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 138,
                                                "children": []
                                            },
                                            {
                                                "id": 788,
                                                "parent_id": 776,
                                                "text": "CRAYONS AQUARELLABLE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            },
                                            {
                                                "id": 789,
                                                "parent_id": 776,
                                                "text": "CRAYONS À CIRE",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 22,
                                                "children": []
                                            },
                                            {
                                                "id": 800,
                                                "parent_id": 776,
                                                "text": "AQUARELLES",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 24,
                                                "children": []
                                            },
                                            {
                                                "id": 855,
                                                "parent_id": 776,
                                                "text": "CRAYON DE COULEUR PASTEL",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 22,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 868,
                                        "parent_id": 770,
                                        "text": "DESSIN ET ART GRAPHIQUE",
                                        "is_active": true,
                                        "position": 5,
                                        "level": 4,
                                        "product_count": 738,
                                        "children": [
                                            {
                                                "id": 869,
                                                "parent_id": 868,
                                                "text": "FEUTRE MARQUEUR ET STYLO",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 46,
                                                "children": []
                                            },
                                            {
                                                "id": 875,
                                                "parent_id": 868,
                                                "text": "OUTILS DE CALIGRAPHIE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 28,
                                                "children": []
                                            },
                                            {
                                                "id": 897,
                                                "parent_id": 868,
                                                "text": "ENCRES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 89,
                                                "children": []
                                            },
                                            {
                                                "id": 1826,
                                                "parent_id": 868,
                                                "text": "CRAYON GRAPHITE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 65,
                                                "children": []
                                            },
                                            {
                                                "id": 1832,
                                                "parent_id": 868,
                                                "text": "PASTEL SEC ET A L HUILE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 22,
                                                "children": []
                                            },
                                            {
                                                "id": 1835,
                                                "parent_id": 868,
                                                "text": "FEUTRE",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 38,
                                                "children": []
                                            },
                                            {
                                                "id": 1847,
                                                "parent_id": 868,
                                                "text": "FEUTRE MARQUEUR & STYLO",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 316,
                                                "children": []
                                            },
                                            {
                                                "id": 1946,
                                                "parent_id": 868,
                                                "text": "CRAYON GRAPHITE CRAIE & FUSAIN",
                                                "is_active": true,
                                                "position": 8,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 2261,
                                                "parent_id": 868,
                                                "text": "PEINTURE EN SPRAY",
                                                "is_active": true,
                                                "position": 9,
                                                "level": 5,
                                                "product_count": 125,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1547,
                                        "parent_id": 770,
                                        "text": "FOURNITURES ET ACCESSOIRES",
                                        "is_active": true,
                                        "position": 6,
                                        "level": 4,
                                        "product_count": 48,
                                        "children": [
                                            {
                                                "id": 1548,
                                                "parent_id": 1547,
                                                "text": "PALETTE DE PEINTURE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            },
                                            {
                                                "id": 1697,
                                                "parent_id": 1547,
                                                "text": "PINCEAUX ECOLIER",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            },
                                            {
                                                "id": 1916,
                                                "parent_id": 1547,
                                                "text": "TAILLE CRAYONS",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 1961,
                                                "parent_id": 1547,
                                                "text": "PEINTURES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": 1345,
                                "parent_id": 3,
                                "text": "TECHNIQUE",
                                "is_active": true,
                                "position": 9,
                                "level": 3,
                                "product_count": 666,
                                "children": [
                                    {
                                        "id": 1346,
                                        "parent_id": 1345,
                                        "text": "TRACAGES",
                                        "is_active": true,
                                        "position": 1,
                                        "level": 4,
                                        "product_count": 36,
                                        "children": [
                                            {
                                                "id": 1347,
                                                "parent_id": 1346,
                                                "text": "COMPAS TECHNIQUE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            },
                                            {
                                                "id": 1801,
                                                "parent_id": 1346,
                                                "text": "EQUERRES TECHNIQUES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 1804,
                                                "parent_id": 1346,
                                                "text": "GRILLE D AMENAGEMENT",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            },
                                            {
                                                "id": 1807,
                                                "parent_id": 1346,
                                                "text": "RAPPORTEURS TECHNIQUES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 1810,
                                                "parent_id": 1346,
                                                "text": "REGLES TECHNIQUES",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            },
                                            {
                                                "id": 1813,
                                                "parent_id": 1346,
                                                "text": "TRACES LETTRES",
                                                "is_active": true,
                                                "position": 6,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 1816,
                                                "parent_id": 1346,
                                                "text": "TABLE DESSIN TECHNIQUE",
                                                "is_active": true,
                                                "position": 7,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1348,
                                        "parent_id": 1345,
                                        "text": "ECRITURE & CORRECTION",
                                        "is_active": true,
                                        "position": 2,
                                        "level": 4,
                                        "product_count": 198,
                                        "children": [
                                            {
                                                "id": 1349,
                                                "parent_id": 1348,
                                                "text": "CRAYONS NOIR",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 109,
                                                "children": []
                                            },
                                            {
                                                "id": 1350,
                                                "parent_id": 1348,
                                                "text": "MINES",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 6,
                                                "children": []
                                            },
                                            {
                                                "id": 1351,
                                                "parent_id": 1348,
                                                "text": "PORTES MINES",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 40,
                                                "children": []
                                            },
                                            {
                                                "id": 1356,
                                                "parent_id": 1348,
                                                "text": "GOMMES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 43,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1357,
                                        "parent_id": 1345,
                                        "text": "COLLES, ADHESIFS & ACCESSOIRES",
                                        "is_active": true,
                                        "position": 3,
                                        "level": 4,
                                        "product_count": 26,
                                        "children": [
                                            {
                                                "id": 1358,
                                                "parent_id": 1357,
                                                "text": "COLLES LIQUIDES",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 19,
                                                "children": []
                                            },
                                            {
                                                "id": 1359,
                                                "parent_id": 1357,
                                                "text": "COLLES GEL",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 7,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1360,
                                        "parent_id": 1345,
                                        "text": "SUPPORTS EN PAPIER",
                                        "is_active": true,
                                        "position": 4,
                                        "level": 4,
                                        "product_count": 33,
                                        "children": [
                                            {
                                                "id": 1361,
                                                "parent_id": 1360,
                                                "text": "CARTONS PLUME & ONDULEE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 18,
                                                "children": []
                                            },
                                            {
                                                "id": 1363,
                                                "parent_id": 1360,
                                                "text": "PAPIER MILIMETRE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 1,
                                                "children": []
                                            },
                                            {
                                                "id": 1364,
                                                "parent_id": 1360,
                                                "text": "PAPIER CALQUE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 3,
                                                "children": []
                                            },
                                            {
                                                "id": 2116,
                                                "parent_id": 1360,
                                                "text": "CARTONS PLUME & ONDULES",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 11,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 1799,
                                        "parent_id": 1345,
                                        "text": "DESSIN ET ART GRAPHIQUE",
                                        "is_active": true,
                                        "position": 5,
                                        "level": 4,
                                        "product_count": 370,
                                        "children": [
                                            {
                                                "id": 1800,
                                                "parent_id": 1799,
                                                "text": "FEUTRE MARQUEUR ET STYLO",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            },
                                            {
                                                "id": 1836,
                                                "parent_id": 1799,
                                                "text": "FEUTRE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 38,
                                                "children": []
                                            },
                                            {
                                                "id": 1848,
                                                "parent_id": 1799,
                                                "text": "FEUTRE MARQUEUR & STYLO",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 316,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2133,
                                        "parent_id": 1345,
                                        "text": "Dessin & Art graphique",
                                        "is_active": true,
                                        "position": 6,
                                        "level": 4,
                                        "product_count": 2,
                                        "children": [
                                            {
                                                "id": 2134,
                                                "parent_id": 2133,
                                                "text": "FEUTRE MARQUEUR & STYLO",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 2,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2249,
                                        "parent_id": 1345,
                                        "text": "COLLES",
                                        "is_active": true,
                                        "position": 7,
                                        "level": 4,
                                        "product_count": 26,
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": 2185,
                                "parent_id": 3,
                                "text": "EQUIPEMENT HOTEL & MAGASIN",
                                "is_active": true,
                                "position": 10,
                                "level": 3,
                                "product_count": 133,
                                "children": [
                                    {
                                        "id": 2186,
                                        "parent_id": 2185,
                                        "text": "EQUIPEMENT HOTEL",
                                        "is_active": true,
                                        "position": 1,
                                        "level": 4,
                                        "product_count": 72,
                                        "children": [
                                            {
                                                "id": 2188,
                                                "parent_id": 2186,
                                                "text": "RECEPTION ACCEUIL & SECURITE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 24,
                                                "children": []
                                            },
                                            {
                                                "id": 2189,
                                                "parent_id": 2186,
                                                "text": "EQUIPEMENTS DE CONFERENCE",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 18,
                                                "children": []
                                            },
                                            {
                                                "id": 2190,
                                                "parent_id": 2186,
                                                "text": "EQUIPEMENTS CHAMBRE ET SERVICE",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 8,
                                                "children": []
                                            },
                                            {
                                                "id": 2191,
                                                "parent_id": 2186,
                                                "text": "SIGNALETIQUE",
                                                "is_active": true,
                                                "position": 4,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 2192,
                                                "parent_id": 2186,
                                                "text": "CENDRIER CORBEILLE & POUBELLE",
                                                "is_active": true,
                                                "position": 5,
                                                "level": 5,
                                                "product_count": 13,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2187,
                                        "parent_id": 2185,
                                        "text": "EQUIPEMENT MAGASIN",
                                        "is_active": true,
                                        "position": 2,
                                        "level": 4,
                                        "product_count": 61,
                                        "children": [
                                            {
                                                "id": 2193,
                                                "parent_id": 2187,
                                                "text": "PANIERS & CHARIOTS",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 32,
                                                "children": []
                                            },
                                            {
                                                "id": 2194,
                                                "parent_id": 2187,
                                                "text": "ENCAISSEMENT",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 29,
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": 2204,
                                "parent_id": 3,
                                "text": "INSTRUMENTS DE COUPE",
                                "is_active": true,
                                "position": 11,
                                "level": 3,
                                "product_count": 1,
                                "children": []
                            },
                            {
                                "id": 2224,
                                "parent_id": 3,
                                "text": "BUREAUTIQUE & INFORMATIQUE",
                                "is_active": true,
                                "position": 12,
                                "level": 3,
                                "product_count": 948,
                                "children": [
                                    {
                                        "id": 2225,
                                        "parent_id": 2224,
                                        "text": "CONSOMMABLES INFORMATIQUES",
                                        "is_active": true,
                                        "position": 1,
                                        "level": 4,
                                        "product_count": 34,
                                        "children": [
                                            {
                                                "id": 2226,
                                                "parent_id": 2225,
                                                "text": "CARTOUCHES & TONNERS",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 34,
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2227,
                                        "parent_id": 2224,
                                        "text": "BAGAGERIE & ACCESSOIRES",
                                        "is_active": true,
                                        "position": 2,
                                        "level": 4,
                                        "product_count": 29,
                                        "children": [
                                            {
                                                "id": 2228,
                                                "parent_id": 2227,
                                                "text": "SACOCHE À EPAULE",
                                                "is_active": true,
                                                "position": 1,
                                                "level": 5,
                                                "product_count": 4,
                                                "children": []
                                            },
                                            {
                                                "id": 2229,
                                                "parent_id": 2227,
                                                "text": "SAC À DOS",
                                                "is_active": true,
                                                "position": 2,
                                                "level": 5,
                                                "product_count": 9,
                                                "children": []
                                            },
                                            {
                                                "id": 2245,
                                                "parent_id": 2227,
                                                "text": "SAC À DOS LAPTOP",
                                                "is_active": true,
                                                "position": 3,
                                                "level": 5,
                                                "product_count": 16,
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 1798,
                        "parent_id": 2,
                        "text": "Promos",
                        "is_active": true,
                        "position": 2,
                        "level": 2,
                        "product_count": 130,
                        "children": []
                    },
                    {
                        "id": 2121,
                        "parent_id": 2,
                        "text": "A LA UNE",
                        "is_active": true,
                        "position": 3,
                        "level": 2,
                        "product_count": 7,
                        "children": []
                    },
                    {
                        "id": 2122,
                        "parent_id": 2,
                        "text": "TOP TENDANCE",
                        "is_active": true,
                        "position": 4,
                        "level": 2,
                        "product_count": 7,
                        "children": []
                    },
                    {
                        "id": 2123,
                        "parent_id": 2,
                        "text": "MEILLEUR VENTES",
                        "is_active": true,
                        "position": 5,
                        "level": 2,
                        "product_count": 6,
                        "children": []
                    },
                    {
                        "id": 2374,
                        "parent_id": 2,
                        "text": "Promo Rentree Univ",
                        "is_active": true,
                        "position": 6,
                        "level": 2,
                        "product_count": 2457,
                        "children": []
                    },
                    {
                        "id": 2172,
                        "parent_id": 2,
                        "text": "Made in Algeria",
                        "is_active": true,
                        "position": 7,
                        "level": 2,
                        "product_count": 479,
                        "children": []
                    }
                ]
            }
        }
    }
});