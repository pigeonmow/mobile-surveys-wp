<!-- create view -->

  <nav role='navigation'>
    <ul class='list-unstyled list-inline tabs'>
      <li><a>Tab One</a></li>
      <li><a class='current-item'>Tab Two</a></li>
      <li><a>Tab Three</a></li>
    </ul>
  </nav>
  <form>
	  <label htmlFor='radio' className='input-radio form-element'>
	    <input type='radio'>
	    New Question
	    </input>
	  </label>
	  <select className='form-element'>
	    <option>Multiple Choice</option>
	    <option>Drop Down</option>
	    <option>Text Box</option>
	  </select>
	  <button type='submit' class='button button-primary'>Add</button>
  </form>
  
  <!-- tabs -->
  
  <div className='tabbed'>
    <ul className='list-unstyled list-inline tabs'>
      <li><a href='/add-question' className='current-item'>
            Add Question
          </a>
      </li>
      <li><a href='/edit-question'>Edit Question</a></li>
      <li><a href='/add-element'>Add Element</a></li>
      <li><a href='/preview'>Preview</a></li>
    </ul>
  </div>
  
  <!-- multiple choice -->
  
  <div className='multi-question'>
    <form action='' method='' id=''>
      <input type='radio' name='' value='' checked='checked' />
        Choice 1
      <input type='radio' name='' value='' />
        Choice 2
      <input type='radio' name='' value='' />
        Choice 3
      <input type='radio' name='' value='' />
        Choice 4
    </form>
  </div>
  
  <!-- Drop down -->
  