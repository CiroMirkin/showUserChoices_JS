"use strict"

const inputText = document.getElementById('input-text')
const choicesContent = document.getElementById('choices')

inputText.addEventListener('input', () => {
	const text = inputText.value
    const options = !text ? ['This is a option.'] : text.split(',')

	
	showOptions(options)
})

const showOptions = (options) => {
    const optionsFragment = document.createDocumentFragment()
        
	options.forEach(option => {
		const newOption = document.createElement('li')
		newOption.classList.add('choices__option')
        newOption.innerText = option
            
        optionsFragment.appendChild(newOption)
    })
		
	
	choicesContent.innerHTML = ''
    choicesContent.appendChild(optionsFragment)
}