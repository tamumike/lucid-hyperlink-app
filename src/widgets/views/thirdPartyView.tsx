import $ = require("jquery");

import {CSS, elements} from "../views/base";

export const templates = {
    "Pipelines": {
        dropdown_opts: ["Natural Gas", "Crude Oil", "NGL", "Refined Products"]
    },
    "Facilities": {
        dropdown_opts: ["Compressors", "Meters", "Processing Plants"]
    },
    op_values: {}
};

export const renderWidget = (): void => {

    const markup = 
        `<div class=${CSS.panel_obj.container}>
            <p class=${CSS.panel_obj.title}>3rd Party Data</p>
            <div id=${CSS.panel_obj.tab_container} class=${CSS.panel_obj.subcontainer}>
                <ul id=${CSS.panel_obj.tab_list}>
                    <li class="${CSS.panel_obj.tab} active-feature">Pipelines</li>
                </ul>
            </div>
            <button id=${CSS.thirdParty.add_btn} class="${CSS.panel_obj.button} ${CSS.button}"><img class=${CSS.add_img} />Add</button>
            <p class=${CSS.panel_obj.heading}>Layers</p>
            <div class=${CSS.panel_obj.divider2}></div>
            <div class=${CSS.panel_obj.subcontainer}>
                <ul id=${CSS.thirdParty.list} class=${CSS.panel_obj.unordered_list}>
                </ul>
            </div>
        </div>`;

    $(elements.panel).append(markup);
    renderFeatureMarkup("Pipelines")
};

export const renderFeatureMarkup = (name: string): void => {

    removeFeatureMarkup();

    const markup = 
        `<div id=${CSS.thirdParty.action_container} class=${CSS.panel_obj.subcontainer}>
            <p class=${CSS.panel_obj.heading}>Select Type</p>
            <select id=${CSS.thirdParty.dropdown} class=${CSS.dropdown}>${populateDropdownOptions(name)}</select>
        </div>`;

    $(markup).insertAfter($(elements.panel_obj.tab_container));

    populateDropdownOptions(name);

};

const populateDropdownOptions = (name: string): string => {

    let options: string = '';

    templates[name].dropdown_opts.forEach((option: string) => {
        
        options += `<option>${option}</option>`;
        
    });

    return options;
    
};

export const isActive = (element: JQuery): boolean => {

    return element.hasClass('active-feature');

};

export const toggleCurrentActive = (): void => {

    let currentActive = $(".active-feature");

    currentActive.each(index => {

        $(currentActive[index]).toggleClass("active-feature");

    });

};

export const toggleActiveFeature = (element: JQuery): void => {

    element.toggleClass('active-feature');

};

export const removeFeatureMarkup = (): void => {

    $(elements.thirdParty.action_container).remove();

};

export const renderListItem = (name: string): void => {

    if ($(`li.${CSS.thirdParty.list_item}:contains(${name})`).length === 0) {

        const markup = 
        `<li class=${CSS.thirdParty.list_item}>${name}</li>`;
    
        $(elements.thirdParty.list).append(markup);
    }
    
};

export const removeListItem = (name: string): void => {

    $(`${elements.thirdParty.list_item}:contains(${name})`).remove();

};

export const renderFeatureOptions = (element: JQuery): void => {

    const markup = 
    `<div class=${CSS.thirdParty.options}>
        <img id=${CSS.thirdParty.filter_img} class=${CSS.thirdParty.options_img} title="Filter" />
        <img id=${CSS.thirdParty.remove_img} class=${CSS.thirdParty.options_img} title="Remove" />
    </div>`;
    
    if (!hasOptions(element)) {

        element.append(markup);

        removeExistingOptions(element);

    } else {

        element.children().remove();

    }

};

const hasOptions = (element: JQuery): boolean => {
    
    return (element.children().length > 0) ? true : false;

};

const removeExistingOptions = (element: JQuery): void => {

    let existingOptions = $(`${elements.thirdParty.options}`);
    
    existingOptions.each((index) => {

        if (!$(existingOptions[index]).parent().is(element)) {

            $(existingOptions[index]).remove();

        }

    });

};

export const renderFilterPanel = (name: string): void => {

    const markup = 
        `<div class=${CSS.modal.subcontainer}>
            <p class=${CSS.modal.title}>${name}</p>
            <div class=${CSS.thirdParty.values_container}>
                <ul id=${CSS.thirdParty.avail_opts} class=${CSS.modal.options_list}>
                </ul>
            </div>
            <div class=${CSS.thirdParty.values_container}>
                <ul id=${CSS.thirdParty.selected_opts} class=${CSS.modal.options_list}>
                </ul>
            </div>
            <img class=${CSS.search_img} />
            <input placeholder="Search..." type="text" id=${CSS.thirdParty.op_search} class=${CSS.textbox}></input>
        </div>`;

        $(elements.modal.panel).append(markup);

};

export const renderValuesList = (values: string[], currentExpressions: string[]): void => {

    values.forEach((value) => {

        const markup = `<li class=${CSS.modal.list_item}>${value}</li>`;

        if (currentExpressions.indexOf(value) === -1) $(elements.thirdParty.avail_opts).append(markup);

    });

    toggleActiveFilters(currentExpressions);

};

export const toggleActiveFilters = (values: string[]): void => {
    
    values.forEach((value) => {

        const markup = $(`<li class="${CSS.modal.list_item} active-filter">${value}</li>`);

        $(elements.thirdParty.selected_opts).append(markup);

    });

};

export const transferItem = (element: JQuery): void => {

    const itemContents: string[] =[];

    if (element.hasClass('active-filter')) {

        element.detach().appendTo($(elements.thirdParty.selected_opts));

    } else {

        element.detach();

        $(elements.thirdParty.avail_opts).children('li').each((key, value) => {

            itemContents.push($(value).text());
            
        });
    
        itemContents.push(element.text());
        itemContents.sort();

        let neighbor: string = itemContents[itemContents.indexOf(element.text())+1];

        (neighbor) ? element.insertBefore($(`.${CSS.modal.list_item}:contains(${neighbor})`)) :
        element.appendTo(elements.thirdParty.avail_opts);
        
    }
    
};

export const scrollOptionsDiv = (value: string): void => {

    const $parent = $(elements.thirdParty.avail_opts).parent();
    const element = $(`${elements.thirdParty.avail_opts} > li:contains(${value})`);

    if (element.length > 0) {
        
        $parent.scrollTop(($parent.scrollTop() as number) + (element.position().top as number));

    }

};