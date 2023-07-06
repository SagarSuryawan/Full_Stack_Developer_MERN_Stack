How is Border-box different from Content Box?

Explaination -

Content-Box:- The specified width and height do not include the padding or border. The padding and border are added to the content dimensions, resulting in the total width and height of the element. 


Example = if a box has 200px width ,10 px padding and 2px of border.The total width of the element is 212


<!-- --------------------------------------------------------------------------------------------------  -->

Border-Box :- "box-sizing" property is set to "border-box," the width and height properties include both the content, padding, and border. This means that if you set a width of 200 pixels, the padding and border are subtracted from that width to determine the width of the content area.
