export default {
	props: {
		// 头像图片组
		urls: {
			type: Array,
			default: uni.$u.props.avatarGroup.urls
		},
		// 最多展示的头像数量
		maxCount: {
			type: [Number, String],
			default: uni.$u.props.avatarGroup.maxCount
		},
		// 头像形状
		shape: {
			type: String,
			default: uni.$u.props.avatarGroup.shape
		},
		// 图片裁剪模式
		mode: {
			type: String,
			default: uni.$u.props.avatarGroup.mode
		},
		// 超出maxCount时是否显示查看更多的提示
		showMore: {
			type: Boolean,
			default: uni.$u.props.avatarGroup.showMore
		},
		// 头像大小
		size: {
			type: [Number, String],
			default: uni.$u.props.avatarGroup.size
		},
		// 指定从数组的对象元素中读取哪个属性作为图片地址
		keyName: {
			type: String,
			default: uni.$u.props.avatarGroup.keyName
		},
		gap: {
			type: [String, Number],
			validator(value) {
				return value >= 0 && value <= 1
			},
			default: uni.$u.props.avatarGroup.gap
		}
	}
}