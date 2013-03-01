!SLIDE incremental

# Те же mixins, но лучше

 * Не допускается работа с состоянием напрямую внутри traits
 * Обязательное разрешение конфликтов с помощью переименований

!SLIDE

# Псевдокод

	@@@ text
	trait Comparable
	  require :compare

	  def sort
	    # ...
	  end
	end

	class A
	  include Comparable
	end

!SLIDE

	@@@ text
	trait FirstTrait
	  def foo; 'first'; end
	end

	trait SecondTrait
	  def foo; 'second'; end
	end

	class A
	  include FirstTrait
	  include SecondTrait,
	    rename_to: {foo: 'second_foo'}
	end