!SLIDE[tmpl=black] center
<div><img src="three-rules.png" /></div>

!SLIDE

# Стандартная мантра

 * Инкапсуляция
 * Наследование
 * Полиморфизм

!SLIDE

.notes Инкапсуляция не обязательно подразумевает полное закрытие доступа

# Стандартная мантра

## Инкапсуляция в **Python**?

!SLIDE

	@@@ python
	class A:
		def __init__(self, value):
			self._var = value

	a = A(10)
	a._var = 5
	print a._var # => 5

!SLIDE

	@@@ python
	class A:
		def __init__(self, value):
			self.__var = value

	a = A(10)
	a._A__var = 5
	print a._A__var # => 5

!SLIDE

# Стандартная мантра

 * Инкапсуляция
 * Наследование
 * Полиморфизм

!SLIDE

# Стандартная мантра

## Инкапсуляция в **Ruby**?

!SLIDE

	@@@ ruby
	class A
	  attr_reader :var # getter
	  def initialize(value)
	  	@var = value
	  end
	end

	a = A.new(10)
	a.instance_exec do
	  @var = 5
	end

	puts(a.var) # => 5

!SLIDE

# Стандартная мантра

 * Инкапсуляция
 * Наследование
 * Полиморфизм

!SLIDE

# Стандартная мантра

## Наследование в **Go**?

!SLIDE

# Наследование интерфейсов
## Ага

!SLIDE

.notes Кен Томпсон и Роб Пайк (Google) посчитали наследование реализации источником проблем

# Наследование реализации
## Неа

!SLIDE

<pre class="sh_sourceCode">
<code><strong>package</strong> main

<strong>type</strong> <span class="sh_type">Jumper</span> <strong>interface</strong> { Jump() }
<strong>type</strong> <span class="sh_type">Runner</span> <strong>interface</strong> { Run() }
<strong>type</strong> <span class="sh_type">JumpRunner</span> <strong>interface</strong> {
	<span class="sh_type">Jumper</span>
	<span class="sh_type">Runner</span>
}

<strong>type</strong> <span class="sh_type">MyStruct</span> <strong>struct</strong> {}
<strong>func</strong> (this <span class="sh_type">MyStruct</span>) Jump() {}
<strong>func</strong> (this <span class="sh_type">MyStruct</span>) Runner() {}
</code>
</pre>

!SLIDE