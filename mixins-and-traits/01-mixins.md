!SLIDE

# Способ переиспользования методов между классами

!SLIDE

	@@@ ruby
	module Comparable
	  def sort
	    # ...
	  end
	end

	class A
	  include Comparable
	end

	class B
	  include Comparable
	end

!SLIDE

# Enumerable (требует `each`)
`all?`, `any?`, `chunk`, `collect`, `collect_concat`, `count`, `cycle`, `detect`, `drop`, `drop_while`, `each_cons`, `each_entry`, `each_slice`, `each_with_index`, `each_with_object`, `entries`, `find`, `find_all`, `find_index`, `first`, `flat_map`, `grep`, `group_by`, `include?`, `inject`, `lazy`, `map`, `member?`, `none?`, `one?`, `partition`, `reduce`, `reject`, `reverse_each`, `select`, `slice_before`, `take`, `take_while`, `to_a`, `zip`

!SLIDE

# То же множественное наследование, но лучше

.notes можно контроллировать приоритет определений методов, включать динамически

!SLIDE incremental

# Проблемы

 * отказ от принципа инкапсуляции
 * проблемы с перекрытием имён методов

!SLIDE

	@@@ ruby
	module FirstMixin
	  def foo; 'first'; end
	end

	module SecondMixin
	  def foo; 'second'; end
	end

	class A
	  include FirstMixin
	  include SecondMixin
	end